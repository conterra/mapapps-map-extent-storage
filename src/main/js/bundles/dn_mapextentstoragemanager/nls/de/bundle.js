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
    bundleName: "Kartenausschnittsmanager",
    bundleDescription: "Dieses bundle ermöglicht das verwalten von Kartenausschnitten, die im local storage hinterlegt wurden.",
    tool: {
        title: "Kartenausschnittsmanager",
        name: "ManageToggleTool"
    },
    ui: {
        description: "Hier sind alle Kartenausschnitte, die im local storage hinterlegt sind.",
        deletionCard: {
            title: "Bestätigung des Löschens eines Kartenausschnitts",
            questionPart1: "Möchten sie wirklich den Kartenausschnitt der App '",
            questionPart2: "' löschen? Diese Aktion kann nicht rückgängig gemacht werden."
        },
        yes: "ja",
        no: "nein"
    }
};
