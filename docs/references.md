# Interaction Flow
 
- The Dashboard serves as the entry point, introducing the project goals and usage instructions. 
 
- The user enters the Folium Map Layer [1]. 
 
- The Popup Card (Memory Layer) is triggered after clicking the mark. 
 
- Click the "Enter 360° Tour" button to enter the panorama Viewer. 
 
- In panoramic scenes, scene jumps are achieved through hotspot. 
 
This reflects a progressive experience from Navigation → Narrative Discovery → Spatial Immersion.


# Scholarly Contribution

Between Map and Memory builds upon Tong et al.’s [2] concept of “Annotated Charts” to transform the digital map from a navigation tool into a storytelling medium. While traditional maps support searching (finding locations), our Map Layer supports exploring by embedding cultural context directly into spatial markers.

For instance, clicking on the Kunqu Opera Museum node does not merely show practical information, but triggers a Memory Layer pop-up narrating the cultural identity of “Ancestor of Hundred Operas” (百戏之祖). This interaction shifts user experience from navigation to narrative discovery, ensuring that international visitors (e.g., DKU students) can interpret the meaning behind “Jade from Kunshan” (玉出昆冈) without needing a physical guide.

Drawing from Li et al.’s GeoCamera system [3], we adapted cinematic “Push In” transitions to guide users from 2D map interaction into immersive 360° panoramic scenes.

In the field of digital heritage, Zhang et al.’s work on Suzhou Classical Gardens [4] emphasizes high-fidelity 3D modeling and ink-wash rendering to evoke aesthetic immersion. While their approach excels in artistic reconstruction, our project prioritizes photorealistic authenticity and accessibility. Instead of abstract 3D modeling, we utilize Pannellum-based 360° panoramic photography to capture the living state of nine iconic cultural sites. Interconnected panoramas simulate the experience of wandering, lowering the technical barrier compared to headset-dependent VR systems.

Recent systems such as Yang et al.’s AI-driven multimodal guidance framework [5] leverage LLMs for dynamic interaction, but require substantial computational resources and development overhead. In contrast, our system embraces open-source tools (Folium, Pannellum) to create a lightweight, community-centered digital heritage prototype.

Inspired by the Digital Dunhuang project [6], our approach demonstrates how scalable, open-source infrastructures can democratize cultural preservation [7]. This aligns with SDG 11 (Sustainable Cities and Communities) and SDG 4 (Quality Education), making digital heritage accessible to both local residents and the international DKU community.

# References

[1] Folium Documentation. Folium: Python Data Visualization Library.  
Available at: https://python-visualization.github.io/folium/

[2] C. Tong, R. Roberts, R. Borgo, et al., “Storytelling in visualization: An extended survey,” Information Visualization, vol. 17, no. 1, pp. 66–90, 2018.

[3] W. Li, Z. Wang, Y. Wang, et al., “GeoCamera: Telling Stories in Geographic Visualization with Camera Movements,” in Proc. of the 2023 CHI Conference on Human Factors in Computing Systems (CHI ’23), Hamburg, Germany, 2023, Article 635.

[4] M. Zhang, N. Jin, N. Xiang, and C. Ji, “Immersive Virtual Reality for Digital Cultural Tourism,” in ICVRT '24: Proceedings of the 2024 International Conference on Virtual Reality Technology, 2024, pp. 44–50. DOI: https://doi.org/10.1145/3711496.3711503

[5] J. Yang, S. Liu, X. Li, M. Jiang, Z. Deng, and J. Wan, “Design and Implementation of a Digital Human Guidance System Based on Multimodal Interaction and Large Language Models,” in AIFM ’25: Proceedings of the 2025 International Conference on Artificial Intelligence and Foundation Model, 2025, pp. 168–173. DOI: https://doi.org/10.1145/3786709.3786734

[6] Dunhuang Academy, “Digital Dunhuang,” 2016. [Online]. Available: https://www.e-dunhuang.com.

[7] Pannellum Documentation. Pannellum: Lightweight Web-based Panorama Viewer.  
Available at: https://pannellum.org/
