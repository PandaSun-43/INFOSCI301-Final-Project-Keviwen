# INFOSCI301-Final-Project-Keviwen
## Tinglin Garden: Between Map & Memory | 亭林园：地图与记忆 · INFOSCI301 Final Project

**Authors:** Lydia Hu, Kelsey Zhang

Tinglin Garden: Between Map & Memory is an interactive spatial visualization project that explores the cultural landscape of Tinglin Garden (亭林园), Kunshan.

The project integrates two complementary layers:

**Map (Analytical Layer)** : spatial navigation & geospatial structure

**Memory (Experiential Layer)** : cultural narratives through 360° panoramic scenes

Built with **Python, Folium, Pannellum**, the project combines geospatial mapping, structured story cards, and browser-based panorama rendering within a digital humanities framework.

The entire system is deployed via GitHub Pages, requiring no backend.

## 🗺️ Visualization

👉 **Start from our dashboard:**  https://pandasun-43.github.io/INFOSCI301-Final-Project-Keviwen/dashboard.html

👉 **Open the interactive tour:**  https://pandasun-43.github.io/INFOSCI301-Final-Project-Keviwen/app.html 


## ✨ Key Features

🗺 **Interactive Cultural Map (Folium-based)** 

- Geolocated heritage sites: All heritage locations are mapped using real geographic coordinates and rendered through Folium.

- Bilingual popup cards (CN/EN): Each site has bilingual descriptions to improve accessibility for both local and international audiences.

- Thematic categorization: Cultural sites are organized into thematic layers (e.g., Pavilions, Museums, Gardens, Monuments), supporting structured exploration and comparative viewing.

👓 **Web-based 360° Panorama Exploration**

- 360° panorama viewing (Pannellum): Equirectangular images are rendered client-side using a lightweight JavaScript viewer.

- Scene-to-scene navigation: Spatial transitions are implemented through interactive hotspots, allowing users to move between connected locations.

- Lightweight browser-native implementation: The VR component runs entirely in standard web browsers without requiring additional software or hardware.  

📍 **Spatial Narrative Structure**

- Each location as narrative unit: Each mapped site functions as an informational node combining spatial position and cultural context (pop-up card).

- Story-informed spatial linking: Cultural landmarks are connected through interpretive descriptions to encourage contextual understanding.


🌳 **Dual Interaction Modes**

- Analytical exploration (Map interface): The map interface supports spatial comparison and infomation understanding.

- Experiential exploration (Panorama interface): The 360° interface supports embodied spatial perception and environmental immersion.

These two modes provide complementary perspectives on the same cultural dataset.

🌐 **Static Web Architecture**

- Client-side implementation only: The project is implemented entirely using HTML, CSS, JavaScript, and Python preprocessing.

- No backend or database dependency: All assets are served as static files, enabling deployment on platforms such as GitHub Pages.

- Portable and reproducible structure: The project can be cloned and deployed without server configuration.


## 🛠️ Technical Workflow

#### **1. Data Processing (Python)**
- Manually curated landmark dataset
- Bilingual metadata encoding (CN/EN)
- Thematic classification (Pavilion, Museum, Monument, Garden…)
- Image asset organization

Output structured inputs for Folium map generation.

#### **2. Interactive Map Construction (Folium)**
- Basemap rendering (OpenStreetMap)
- Category Identification and Marker
- Custom HTML/CSS popup cards
- Embedded image previews
- Export standalone HTML file

#### **3. Immersive VR Layer (Pannellum)**
- 360° panorama capture
- Scene configuration (scene1–sceneN)
- Scene linking via hotspot navigation
- Lightweight browser-based rendering

Pannellum enables browser-based 360° panorama interaction without requiring additional software installation.

#### **4. Deployment**
- Static HTML export
- Asset folder structuring
- GitHub Pages hosting

## 🌍 UN SDG Contributions

| Goal | Contribution |
|------|--------------|
| **SDG 4 – Quality Education** | Accessible bilingual cultural learning through spatial storytelling |
| **SDG 9 – Industry, Innovation & Infrastructure** | Application of open-source web-based visualization tools |
| **SDG 11 – Sustainable Cities & Communities** | Digital preservation of urban cultural heritage |
| **SDG 17 – Partnerships for the Goals** | Linking university research with local cultural memory |

## 🏛 Conceptual Framework
This project conceptualizes:

- The garden as an interactive spatial system

- The map as a cognitive navigation structure

- The panorama as a site-specific experiential layer

Rather than treating heritage sites as isolated points, the project models Tinglin Garden as a network of spatially connected cultural nodes.

## 📁 Repository Structure

```plaintext
INFOSCI301-Final-Project-Keviwen/
│
├── dashboard.html (Project Entry Page, Brief introduction and SDG alignment)
├── app.html (Main Interactive Interface)
├── detail_robot.html (Dedicated page for the “Robot Drink Service” site.)
├── tinglin_map_with_tours.html (interactive map output.)
├── tinglin_map.ipynb (Data Preprocessing Notebook)
│
├── pictures/ (All images used in popup cards)
│
├── VR/ (Panorama image assets, Memory-specific HTML files)
│   ├── dragon/
      └── memory_dragon.html
      └── images
      └── scenes.js
      └── main.js
      └── style.css
    ├── guyanwu/
      └── memory_guyanwu.html
      └── images
      └── scenes.js
      └── main.js
      └── style.css
│   ├── kunqu/
      └── memory_kunqu.html
      └── images
      └── scenes.js
      └── main.js
      └── style.css
│   ├── ...
│
└── README.md
