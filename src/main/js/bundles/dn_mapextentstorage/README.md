# dn_mapextentstorage
This bundle saves/loads the properties of the current map extent from/in the local storage of the browser

## Usage
**Requirement: map.apps 4.9.0**

1. First you need to add the bundle dn_mapextentstorage to your app.
2. Then you can configure it.

To make the functions of this bundle available to the user, the following tool can be added to a toolset:

| Tool ID                     | Component                  | Description                       |
|-----------------------------|----------------------------|-----------------------------------|
| MapExtentStorageToggleTool  | MapExtentStorageToggleTool | Activate or deactivate the bundle |

## Configuration Reference

### Config

#### Sample configuration
```json
"Config": {
    "activeByDefault": true
}
```

| Property            | Type    | Possible Values               | Default       | Description                    |
|---------------------|---------|-------------------------------|---------------|--------------------------------|
| activeByDefault     | Boolean | ```true``` &#124; ```false``` | ```false```   | activate bundle by default     |
