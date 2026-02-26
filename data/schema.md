Dataset Overview
This dataset supports an InfoSci 301 final project focused on redesigning a cultural heritage visualization for Tinglin Garden (Kunshan, China). The dataset provides a lightweight geospatial foundation for the project’s Cognitive / Map Layer, using OpenStreetMap (OSM) tiles combined with a curated metadata table for point-based cultural assets.

Rather than redistributing raw geospatial data, this dataset documents how OSM tiles are dynamically accessed and how point-level information (coordinates, sources, and usage context) is organized for visualization purposes.

Dataset Contents
This repository contains the following files:

Tinglin Garden OSM Tile Data

Raw OSM raster tiles for the Tinglin Garden area, including roads, buildings, landmarks, and other geospatial features.
OpenStreetMap Tile Access (Dynamic)

OSM raster tiles accessed via URL endpoints and rendered using Python folium.
metadata.xlsx

A structured table describing cited spatial assets used in the project, including the location of key cultural assets in Tinglin Garden.
No raw OSM tile data or vector shapefiles are redistributed in this repository.

Metadata Description
The file metadata.xlsx contains curated point-based information used in the visualization.

Fields
Column Name	Description
site_id	Unique identifier for each site
latitude	Latitude in WGS84 coordinate system
longitude	Longitude in WGS84 coordinate system
image_name	Associated image file name (if applicable)
source	Original data or image source (e.g., field trip, archival data)
usage	Intended use in the project (e.g., map marker, narrative popup, background reference)
type_en	Type of asset in English (e.g., Teahouse, Pavilion, Bridge)
type_cn	Type of asset in Chinese (e.g., 茶室, 亭, 桥)
desc_en	Description of the asset in English (e.g., Living by the water)
desc_cn	Description of the asset in Chinese (e.g., 临水而居)
video_link	Link to any associated video (currently empty, will be added if available)
All coordinates are recorded in WGS84, ensuring compatibility with OpenStreetMap and common web-mapping frameworks.

