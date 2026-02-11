# INFOSCI301-Final-Project-Keviwen
### Tinglin Garden: Map & Memory | 亭林园：地图与记忆 · INFOSCI301 Final Project

**Authors:** Yiwen Hu, Kexin Zhang

**Live Demo:** 

Tinglin Garden: Map & Memory is an interactive spatial storytelling platform that explores the cultural landscape of Tinglin Garden (亭林园), Kunshan.

The project bridges:

**Map (Cognitive Layer)** — spatial navigation & geospatial structure

**Memory (Experiential Layer)** — cultural narratives & immersive VR experience

Built with **Python + Folium + Pannellum (WebVR)**, the project integrates interactive mapping, bilingual story cards, and 360° panoramas into a browser-based digital humanities interface.

The entire system is deployed as a fully static GitHub Pages site, requiring no backend.

## ✨ Key Features

- 🗺 **Interactive Cultural Map** (Folium-based)

Geolocated heritage sites

Bilingual popup cards (CN/EN)

Thematic categorization (Pavilions, Museums, Gardens, Monuments)

- 👓 **WebVR Immersive Tour**

360° panorama viewing (Pannellum)

Scene-to-scene navigation

Lightweight browser-based experience  

- 📍 **Narrative Geospatial Design**

Each location functions as a “memory node”

Spatial structure reflects philosophical themes

Cultural landmarks connected through storytelling

🌳 **Cognitive + Experiential Dual Interface**

Users may explore analytically (map layer)

Or immerse emotionally (VR layer)

🌐 **Fully Static Deployment**

No database

No server dependency

Pure HTML/CSS/JS + Python preprocessing


## 🗺️ Visualization

👉 **Open the interactive map:**  


The visualization includes:
- Historical pavilions and architectural nodes
- Gu Yanwu memorial sites and philosophical references
- Cultural bridges and symbolic landmarks
- Garden landscape narrative sequencing

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
├── pictures/                  # Site images & SDG icons
├── scenes/                    # VR scene configuration files
├── images/                    # 360° panoramas
├── app.py                     # Folium interactive map generator
├── tinglin_map_fixed.html     # Exported interactive map
├── vr_tour_page.html          # VR entry page
├── index.html                 # Homepage (Map & Memory interface)
└── README.md
