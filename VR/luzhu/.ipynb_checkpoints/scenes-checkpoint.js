// Scene 1: 石阶
var scene1 = {
    "title": "门口Gate",
    "type": "equirectangular",
    "panorama": "./images/1.jpg",
    "hotSpots": [
        {
            "pitch": -7.999713249579749,
            "yaw": -0.8387908220420947,
            "type": "scene",
            "text": "进入菉竹居 / Enter Lvzhu Residence",
            "sceneId": "scene2"
        },
        
        {
            "pitch": -5.936630415934014,
            "yaw": 177.332768968184,
            "type": "info",
            "text": "亭林园近期举办“花事”主题活动。\nTinglin Garden is currently hosting a seasonal floral event."
        },
        {
            "pitch": -19.74242788655474,
            "yaw": 74.56284252892924,
            "type": "info",
            "text": "草编“喜”字装饰，象征喜庆与祝福。\nA woven “Double Happiness” decoration symbolizes joy and blessings."
        }
    ]
};


// Scene 2: 菉竹居入口
var scene2 = {
    "title": "菉竹居",
    "type": "equirectangular",
    "panorama": "./images/2.jpg",
    "hotSpots": [
        {
            "pitch": -13.893695882668258,
            "yaw": -36.5269030769802,
            "type": "scene",
            "text": "沿小路进入庭院 / Follow the Path into the Courtyard",
            "sceneId": "scene3"
        },
        {
            "pitch": -15.345770343139737,
            "yaw": -176.41721723607776,
            "type": "scene",
            "text": "返回石阶 / Back to the Steps",
            "sceneId": "scene1"
        }
    ]
};


// Scene 3: 菉竹居庭院
var scene3 = {
    "title": "菉竹居庭院",
    "type": "equirectangular",
    "panorama": "./images/3.jpg",
    "hotSpots": [
        {
            "pitch": -5.016603269480469,
            "yaw": -2.1799594310279202,
            "type": "scene",
            "text": "进入婚姻登记处 / Enter the Marriage Registration Office",
            "sceneId": "scene4"
        },
        {
            "pitch": -20.749822509955212,
            "yaw": 91.34905337400235,
            "type": "scene",
            "text": "返回菉竹居入口 / Back to Lvzhu Residence",
            "sceneId": "scene2"
        }
    ]
};


// Scene 4: 婚姻登记处
var scene4 = {
    "title": "园林婚姻登记处",
    "type": "equirectangular",
    "panorama": "./images/4.jpg",
    "hotSpots": [
        {
            "pitch": -7.014941062705895,
            "yaw": 158.85621933105298,
            "type": "scene",
            "text": "沿此离开 / Exit This Way",
            "sceneId": "scene1"
        },
        {
            "pitch": -2.237836094303783,
            "yaw": -138.5667425351536,
            "type": "scene",
            "text": "返回庭院 / Back to Courtyard",
            "sceneId": "scene3"
        },
        {
            "pitch": -9.444440058222776,
            "yaw": -4.687080735308197,
            "type": "info",
            "text": "昆山市民政局在亭林园设立婚姻登记点，将传统园林与现代仪式结合。\nThe Kunshan Civil Affairs Bureau established this marriage registration office within Tinglin Garden, blending tradition with modern ceremony."
        },
        {
            "pitch": 25.653941131626937,
            "yaw": 27.34132893453767,
            "type": "info",
            "text": "窗贴“喜”字象征新人美满姻缘。\nThe “Double Happiness” window decoration symbolizes a joyful and harmonious marriage."
        }
    ]
};
