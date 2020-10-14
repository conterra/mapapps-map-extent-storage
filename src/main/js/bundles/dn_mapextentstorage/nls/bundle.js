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
module.exports = {
    root: {
        bundleName: "map extent storage",
        bundleDescription: "This bundle saves/loads the properties of the current map extent from/in the local storage of the browser",
        tool: {
            title: "map extent storage",
            name: "MapExtentStorageToggleTool"
        },
        info: {
            activationDialog: "Saving and loading of the map extent is enabled. " +
                "The map extent is saved and loaded for each app separately and is stored in the local storage of your browser. " +
                "The saving happens automatically each time you change the map extent. " +
                "To view all map extents in your local storage open the map extent manager.",
            deactivationDialog: "Saving and loading of the map extent is disabled."
        }
    },
    de: true
};
