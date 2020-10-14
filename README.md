# Map extent storage

Description...

![Screenshot App](https://github.com/conterra/mapapps-map-extent-storage/blob/master/screenshot.JPG)

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
