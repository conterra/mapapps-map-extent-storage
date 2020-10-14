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
import Vue from "apprt-vue/Vue";
import VueDijit from "apprt-vue/VueDijit";
import Manager from "./MapExtentStorageManagerWidget.vue";

class MapExtentStorageManagerFactory {
    createInstance() {
        const vm = new Vue(Manager);
        vm.windowManager = this.windowManager;
        vm.i18n = this._i18n.get();
        const widget = new VueDijit(vm);
        return widget;
    }
}

export default MapExtentStorageManagerFactory;
