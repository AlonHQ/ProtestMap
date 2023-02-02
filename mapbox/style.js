
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "721700_1": {
            "type": "geojson",
            "data": json_721700_1
        }
                    ,
        "72_2": {
            "type": "geojson",
            "data": json_72_2
        }
                    ,
        "52_3": {
            "type": "geojson",
            "data": json_52_3
        }
                    ,
        "42_4": {
            "type": "geojson",
            "data": json_42_4
        }
                    ,
        "32_5": {
            "type": "geojson",
            "data": json_32_5
        }
                    ,
        "22_6": {
            "type": "geojson",
            "data": json_22_6
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr__0_0",
            "type": "raster",
            "source": "_0"
        },
        {
            "id": "lyr_721700_1_0",
            "type": "circle",
            "source": "721700_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.5590551182, 2], 'circle-color': '#db1526', 'circle-opacity': 1.0, 'circle-stroke-width': 1.51181102364, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_72_2_0",
            "type": "circle",
            "source": "72_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.5590551182, 2], 'circle-color': '#db2c3a', 'circle-opacity': 1.0, 'circle-stroke-width': 1.51181102364, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_52_3_0",
            "type": "circle",
            "source": "52_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.5590551182, 2], 'circle-color': '#db414e', 'circle-opacity': 1.0, 'circle-stroke-width': 1.51181102364, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_42_4_0",
            "type": "circle",
            "source": "42_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.5590551182, 2], 'circle-color': '#db5863', 'circle-opacity': 1.0, 'circle-stroke-width': 1.51181102364, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_32_5_0",
            "type": "circle",
            "source": "32_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.5590551182, 2], 'circle-color': '#db6d76', 'circle-opacity': 1.0, 'circle-stroke-width': 1.51181102364, 'circle-stroke-color': '#801119'}
        }
,
        {
            "id": "lyr_22_6_0",
            "type": "circle",
            "source": "22_6",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.5590551182, 2], 'circle-color': '#db8389', 'circle-opacity': 1.0, 'circle-stroke-width': 1.51181102364, 'circle-stroke-color': '#801119'}
        }
],
}