/*
 * Copyright (C) 2022 con terra GmbH (info@conterra.de)
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
    bundleName: "Kartenauschnittsspeicher",
    bundleDescription: "Dieses Bundle speichert den aktuellen Kartenauschnitt im local storage des Browsers und liest ihn " +
        "beim erneuten Laden der App wieder aus.",
    tool: {
        title: "Kartenauschnittsspeicher"
    },
    info: {
        activationDialog: "Das Speichern und Laden des Kartenausschnitts ist aktiv. " +
            "Der jeweilige Kartenausschnitt wird für jede app im local storage ihres Browsers vermerkt." +
            "Dies passiert automatisch jedesmal wenn der angezeigte Kartenausschnitt verändert wird." +
            "Um sich alle gespeicherten Kartenausschnitte ihres Browsers anzuzeigen verwenden sie den Kartenausschnittsmanager.",
        deactivationDialog: "Das Speichern und Laden des Kartenausschnitts wurde deaktiviert."
    }
};
