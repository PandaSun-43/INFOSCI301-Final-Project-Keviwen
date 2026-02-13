// Scene 1: 入口
var scene1 = {
    "title": "石阶",
    "type": "equirectangular",
    "panorama": "./images/1.jpg",
    "hotSpots": [
        {
            "pitch": -6.354475384159027,
            "yaw": 1.9444800066937353,
            "type": "scene",
            "text": "拾级而上进入养馀园 / Ascend the steps to Yangyu Garden",
            "sceneId": "scene2"
        }
    ]
};


// Scene 2: 庭院
var scene2 = {
    "title": "养馀园入口",
    "type": "equirectangular",
    "panorama": "./images/2.jpg",
    "hotSpots": [
        {
            "pitch": -3.846325137781814,
            "yaw": -3.351574972950173,
            "type": "scene",
            "text": "园内设有盆景与假山 / Explore the Bonsai and Rockery",
            "sceneId": "scene3"
        },
        {
            "pitch": -13.561376007285588,
            "yaw": -73.74034899487886,
            "type": "scene",
            "text": "沿楼梯返回入口 / Return Downstairs",
            "sceneId": "scene1"
        }
    ]
};


// Scene 3: 展厅门口
var scene3 = {
    "title": "养馀园庭院",
    "type": "equirectangular",
    "panorama": "./images/3.jpg",
    "hotSpots": [
        {
            "pitch": 7.247998603360782,
            "yaw": 24.7383042235019,
            "type": "scene",
            "text": "沿石阶向上 / Proceed Upstairs",
            "sceneId": "scene4"
        },
        {
            "pitch": -8.249176632766263,
            "yaw": -87.58092377204046,
            "type": "scene",
            "text": "返回庭院 / Back to Courtyard",
            "sceneId": "scene2"
        },
        {
            "pitch": -18.555513546949967,
            "yaw": 114.78517441592251,
            "type": "info",
            "text": "亭台掩映于绿植之间，构成园林景观的一部分。\nThe pavilion, framed by lush plants, forms an integral part of the garden landscape."
        }
    ]
};


// Scene 4: 玉出昆冈
var scene4 = {
    "title": "养馀园庭院",
    "type": "equirectangular",
    "panorama": "./images/4.jpg",
    "hotSpots": [
        {
            "pitch": -11.862937978039119,
            "yaw": -78.6695623591133,
            "type": "scene",
            "text": "沿石阶前往 Café / Walk Up to the Café",
            "sceneId": "scene5"
        },
        {
            "pitch": -13.448221229509942,
            "yaw": 177.73949746311345,
            "type": "scene",
            "text": "返回庭院 / Back to Courtyard",
            "sceneId": "scene3"
        }
    ]
};



// Scene 5: Café 区域
var scene5 = {
    "title": "咖法Cafe",
    "type": "equirectangular",
    "panorama": "./images/5.jpg",
    "hotSpots": [
        {
            "pitch": -2.8280079348647726,
            "yaw": -83.8685273391879,
            "type": "scene",
            "text": "沿此路离开 / Exit This Way",
            "sceneId": "scene1"
        },
        {
            "pitch": -7.283580480237232,
            "yaw": 81.74026444811193,
            "type": "scene",
            "text": "返回上一空间 / Back to Previous Area",
            "sceneId": "scene4"
        },
        {
            "pitch": 21.10258161836959,
            "yaw": 5.159967856193855,
            "type": "info",
            "text": "“咖法”Café 提供休憩与交流空间。\nThe “Kafa” Café offers a space for rest and cultural exchange."
        }
    ]
};
