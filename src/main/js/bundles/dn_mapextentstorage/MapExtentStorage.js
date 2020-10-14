/*
 * Copyright (C) 2020 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import ExtPromise from "apprt-core/Promise";
import apprt_request from "apprt-request";

let view;
let i18n;

const waitForView = (model) => {
    return new Promise((resolve, reject) => {
        if (model.view) {
            resolve(model.view);
        } else {
            model.watch("view", ({value}) => {
                resolve(value);
            });
        }
    });
};

// event that indicates, that the storage of this session has changed
let storageEvent;

let appName;
let viewParamRes;

class MapExtentStorage {
    activate() {
        if (!this.mapWidgetModel) {
            return;
        }
        i18n = this._i18n.get();
        let model = this.mapWidgetModel;

        return waitForView(model).then(value => {
            appName = this.appContext.getApplicationName();
            viewParamRes = this.viewParameterResolver;

            view = value;
            if(this._properties.activeByDefault) {
                this.activateSave();
            }
        });
    }
    deactivate() {
        this._viewWatchHandle.remove();
        this._viewWatchHandle = undefined;
        this.mapWidgetModel = undefined;
    }

    activateSave() {
        this.windowManager.createInfoDialogWindow({
            title: "",
            message: i18n.info.activationDialog,
            closable: true,
            showOk: true,
            showCancel: false,
            marginBox: {
                w: 360,
                h: 230
            }
        });
        // initialize storageEvent
        storageEvent = document.createEvent("HTMLEvents");
        storageEvent.initEvent("localstorageSession", true, true);
        storageEvent.eventName = "localstorageSession";

        let model = this.mapWidgetModel;

        this.loadAppParams(appName);
        this.watchChangesInView(view);

        model.watch("view", ({value}) => {
                this.watchChangesInView(value);
        });
    }
    deactivateSave() {
        this.windowManager.createInfoDialogWindow({
            title: "",
            message: i18n.info.deactivationDialog,
            closable: true,
            showOk: true,
            showCancel: false,
            marginBox: {
                w: 360,
                h: 130
            }
        });
        this._viewWatchHandle.remove();
        this._viewWatchHandle = undefined;
        this.mapWidgetModel = undefined;
    }

    loadAppParams(appName) {
        if (!viewParamRes || !appName) {
            return;
        }
        // load parameters from previous session
        let allUrlParams = JSON.parse(localStorage.getItem('urlParams'));
        if (allUrlParams) {
            let specificUrlParams = allUrlParams.find(x => x.appName === appName);
            if (specificUrlParams) {
                viewParamRes.decodeURLParameter(specificUrlParams.params);
            }
        }
    }

    watchChangesInView(view) {
        if (!view || !viewParamRes || !appName) {
            return;
        }

        // save parameters
        this.updateLocalStorage(viewParamRes, appName);
        if (this._viewWatchHandle) {
            this._viewWatchHandle.remove();
        }
        this._viewWatchHandle = view.watch("stationary", () => {
            if(view.stationary) {
                this.updateLocalStorage(view);
            }
        });

    }

    updateLocalStorage(view) {
        // urlParams of this app
        let urlParams = {
            appName: appName,
            datetime: Date.now(),
            params: viewParamRes.encodeURLParameter()
        };
        this.getLocationName(view, "unknown location")
            .then((result) => {
                urlParams.location = result;
                // list of urlParams already in the local storage
                let allUrlParams = JSON.parse(localStorage.getItem('urlParams'));

                if (!allUrlParams) {
                    allUrlParams = [];
                    allUrlParams.push(urlParams);
                } else {
                    let i = allUrlParams.findIndex(x => x.appName === appName);
                    if (i > -1) {
                        allUrlParams[i] = urlParams;
                    } else {
                        allUrlParams.push(urlParams);
                    }
                }
                localStorage.setItem('urlParams', JSON.stringify(allUrlParams));
                // fire the event that indicates, that the storage of this session has changed
                window.dispatchEvent(storageEvent);
            });
    }

    getLocationName(view, defaultName) {
        defaultName = defaultName || "";
        const scale = view.scale;
        let category = "city";
        if (scale >= 750000) {
            category = "subregion";
        }
        if (scale >= 2500000) {
            category = "region";
        }
        if (scale >= 5000000) {
            category = "country";
        }
        return new ExtPromise((resolve) => {
            apprt_request("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates", {
                query: {
                    f: "json",
                    outFields: "PlaceName",
                    location: JSON.stringify(view.center.toJSON()),
                    category: category,
                    maxLocations: 1,
                    //langCode is not supported by Locator, therefore we send the request directly
                    langCode: "en"
                }
            }).then(result => {
                const candidates = result.candidates;
                if (!candidates || candidates.length === 0) {
                    resolve(defaultName);
                }
                resolve(candidates[0].attributes.PlaceName);
            }, error => {
                console.warn("Name cannot be resolved - using default instead.", error);
                resolve(defaultName);
            });
        });
    }
}

export default MapExtentStorage;
