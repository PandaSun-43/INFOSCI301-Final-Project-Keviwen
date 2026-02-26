# Tinglin Garden – Dataset (InfoSci 301)

## Dataset Overview

This dataset supports an InfoSci 301 final project focused on redesigning a cultural heritage visualization for **Tinglin Garden** (Kunshan, China).
The dataset provides a lightweight geospatial foundation for the project’s **Cognitive / Map Layer**, using OpenStreetMap (OSM) tiles combined with a curated metadata table for point-based cultural assets.

Rather than redistributing raw geospatial data, this dataset documents how OSM tiles are dynamically accessed and how point-level information (coordinates, sources, and usage context) is organized for visualization purposes.

---

## Dataset Contents

This repository contains the following files:

* **Tinglin Garden OSM Tile Data**

  * Raw OSM raster tiles for the Tinglin Garden area, including roads, buildings, landmarks, and other geospatial features.

* **OpenStreetMap Tile Access (Dynamic)**

  * OSM raster tiles accessed via URL endpoints and rendered using Python `folium`.

* **metadata.xlsx**

  * A structured table describing cited spatial assets used in the project, including the location of key cultural assets in Tinglin Garden.

No raw OSM tile data or vector shapefiles are redistributed in this repository.

---

## Metadata Description

The file `metadata.xlsx` contains curated point-based information used in the visualization.

### Fields

| Column Name    | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| **site_id**    | Unique identifier for each site                                               |
| **latitude**   | Latitude in WGS84 coordinate system                                                   |
| **longitude**  | Longitude in WGS84 coordinate system                                                  |
| **image_name** | Associated image file name (if applicable)                                            |
| **source**     | Original data or image source (e.g., field trip, archival data)                       |
| **usage**      | Intended use in the project (e.g., map marker, narrative popup, background reference) |
| **type_en**    | Type of asset in English (e.g., Teahouse, Pavilion, Bridge)                           |
| **type_cn**    | Type of asset in Chinese (e.g., 茶室, 亭, 桥)                                             |
| **desc_en**    | Description of the asset in English (e.g., Living by the water)                       |
| **desc_cn**    | Description of the asset in Chinese (e.g., 临水而居)                                      |
| **video_link** | Link to any associated video (currently empty, will be added if available)            |

All coordinates are recorded in **WGS84**, ensuring compatibility with OpenStreetMap and common web-mapping frameworks.

---

## Data Source

### Data Source 1: OpenStreetMap (OSM)

* **Dataset Name**: Tinglin Garden OSM Tile Data

* **URL**: [https://www.openstreetmap.org](https://www.openstreetmap.org)

* **Repository**: Raw data stored in this repository.

* **Rationale & Justification**:
  OpenStreetMap (OSM) provides open and free geographic data, making it ideal for use as a base map in this project. OSM's comprehensive and high-quality geospatial data is well-suited for the visualization of cultural heritage sites, offering a detailed map of **Tinglin Garden**'s area and its surroundings.

* **Sample Data**:
  This dataset includes **OSM tile data** for **Tinglin Garden**. The tiles are dynamically loaded and rendered using Python's `folium` library. Here is an example of how to load these tiles:

  ```python
  folium.TileLayer(
      tiles="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attr="© OpenStreetMap contributors"
  )
  ```

* **Governance & Ethics**:

  * **Privacy**: The OSM dataset does not contain any personal or sensitive information.
  * **Anonymization**: No personal data is included in the dataset; all information pertains to publicly available geographic data.
  * **Inclusivity**: OSM provides worldwide geographic data, supporting multilingual and cross-regional access. This dataset is open and accessible, aligning with open data principles and fostering inclusivity.

---

### Data Source 2: metadata.xlsx

* **Dataset Name**: Tinglin Garden Cultural Asset Metadata

* **URL**: This file is included in the repository.

* **Repository**: The metadata file (`metadata.xlsx`) is stored in this repository.

* **Rationale & Justification**:
  The `metadata.xlsx` file contains detailed information about cultural assets in **Tinglin Garden**. This data includes both English and Chinese descriptions, asset types, geographic coordinates, and links to images and videos. It is essential for generating the interactive map, providing contextual information for the cultural sites.

* **Sample Data**:
  The table contains information for each cultural asset, including the following columns:

  | site_id | latitude  | longitude  | image_name    | type_en  | type_cn | desc_en              | desc_cn |
  | ------- | --------- | ---------- | ------------- | -------- | ------- | -------------------- | ------- |
  | 1       | 31.392246 | 120.940403 | shuiyunju.jpg | Teahouse | 茶室      | Living by the water. | 临水而居    |
  | 2       | 31.391511 | 120.940400 | maokong.jpg   | Café     | 咖啡      | Bookstore and cafe.  | 书店与咖啡。  |

* **Governance & Ethics**:

  * **Privacy**: The metadata does not contain any personal information, only publicly available data about cultural heritage sites.

  * **Anonymization**: All data is publicly accessible and does not include personally identifiable information.

  * **Inclusivity**: The data is available in both English and Chinese, ensuring accessibility for users from different linguistic backgrounds and supporting global cultural preservation.

  * **Additional Note**:
    The descriptions in the **desc_en** and **desc_cn** fields were written with reference to the official **Tinglin Garden website** ([https://www.tinglingarden.com](https://www.tinglingarden.com)), ensuring that the descriptions of cultural assets are accurate and aligned with the official information.

---

## How to Use the Dataset

1. **OpenStreetMap Tiles**:
   Through `folium` library, dynamically load OSM tiles as the base layer for your map, using the raw tile data stored in the repository.

2. **Metadata**:

   * The **metadata.xlsx** file contains all the necessary information for the cultural assets in **Tinglin Garden**. You can use the **latitude** and **longitude** columns to place markers on the map.
   * The **type** and **description** fields can be used for **popups** or **tooltips**, to display information when a user clicks on a marker.
   * You can link the associated **image** files using the `image_name` column, and if there are video links, they can be added as well.

---

### Further Suggestions:

* **Data Display**: If there are video links or additional multimedia content, they can be added in future versions to enhance interactivity.
* **How to Load Data**: Further explanations can be provided on how to use Python code or other tools to load and render these tiles, integrating metadata (such as cultural asset information) for visualization.
