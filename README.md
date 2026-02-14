# INFOSCI301-Final-Project-Keviwen
### Tinglin Garden: Map & Memory | 亭林园：地图与记忆 · INFOSCI301 Final Project

**Authors:** Yiwen Hu, Kexin Zhang

**Live Demo:** https://pandasun-43.github.io/INFOSCI301-Final-Project-Keviwen/dashboard.html

Tinglin Garden: Map & Memory is an interactive spatial storytelling platform that explores the cultural landscape of Tinglin Garden (亭林园), Kunshan.

The project bridges:

**Map (Analytical Layer)** : spatial navigation & geospatial structure

**Memory (Experiential Layer)** : cultural narratives & immersive VR experience

Built with **Python + Folium + Pannellum (WebVR)**, the project integrates interactive mapping, bilingual story cards, and 360° panoramas into a browser-based digital humanities interface.

The entire system is deployed as a fully static GitHub Pages site, requiring no backend.

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

## 🗺️ Visualization

👉 **Open the interactive map:**  https://pandasun-43.github.io/INFOSCI301-Final-Project-Keviwen/app.html 

Each marker is not merely a location. It represents a cultural memory interface.


## 🛠️ Technical Workflow

### **1. Data Processing (Python)**
- Manually curated landmark dataset
- Bilingual metadata encoding (CN/EN)
- Thematic classification (Pavilion, Museum, Monument, Garden…)
- Image asset organization

Output structured inputs for Folium map generation.

### **2. Interactive Map Construction (Folium)**
- Basemap rendering (OpenStreetMap)
- Marker clustering & category grouping
- Custom HTML/CSS popup cards
- Embedded image previews
- Export standalone HTML file

### **3. Immersive VR Layer (Pannellum)**
- 360° panorama capture
- Scene configuration (scene1–sceneN)
- Scene linking via hotspot navigation
- Lightweight browser-based rendering

Pannellum enables WebVR without requiring any application download.

### **4. Deployment**
- Static HTML export
- Asset folder structuring
- GitHub Pages hosting
- Cross-browser compatibility validation

## 🌍 UN SDG Contributions

| Goal | Contribution |
|------|--------------|
| **SDG 4 – Quality Education** | Accessible bilingual cultural learning through spatial storytelling |
| **SDG 9 – Industry, Innovation & Infrastructure** | Open-source WebVR + digital mapping innovation |
| **SDG 11 – Sustainable Cities & Communities** | Digital preservation of urban cultural heritage |
| **SDG 17 – Partnerships for the Goals** | Linking university research with local cultural memory |

## 🏛 Conceptual Framework
This project proposes:
- The Garden as an Interface.
- The Map as Cognition.
- The Panorama as Memory.

Rather than treating heritage sites as static points, we frame Tinglin Garden as a dynamic cultural memory network.

## 📁 Repository Structure

```plaintext
INFOSCI301-Final-Project-Keviwen/
│
├── dashboard.html (Project Entry Page, Brief introduction and SDG alignment)
├── app.html (Main Interactive Interface)
├── detail_robot.html (Dedicated page for the “Robot Drink Service” site.)
├── tinglin_map_fixed.html (interactive map output.)
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
