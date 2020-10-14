# Map extent storage

The Map extent storage bundle saves the current map extent of your app and loads the last one when the app is opened again.
The map extent is saved and loaded for each app separately and is stored in the local storage of your browser.
The saving happens automatically each time you change the map extent. 
![Screenshot: Map extent storage bundle](https://github.com/conterra/mapapps-map-extent-storage/blob/master/screenshot.JPG)

To view all map extents in your local storage use the map extent storage manager bundle.
This bundle contains a widget that displays all map extents that are currently saved in the local storage of your 
browser. Here you can also delete unwanted extents. It works independently of the "Save and load map extents bundle".

![Screenshot: Map extent storage manager bundle](https://github.com/conterra/mapapps-map-extent-storage/blob/master/screenshot.JPG)

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_charting/index.html

## Installation Guide
**Requirement: map.apps 4.9.0**

[dn_mapextentstorage Documentation](https://github.com/conterra/mapapps-map-extent-storage/tree/master/src/main/js/bundles/dn_mapextentstorage)

[dn_mapextentstoragemanager Documentation](https://github.com/conterra/mapapps-map-extent-storage/tree/master/src/main/js/bundles/dn_mapextentstoragemanager)

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
