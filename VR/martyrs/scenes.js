// Scene 1: 石阶
var scene1 = {
    "title": "陵园",
    "type": "equirectangular",
    "panorama": "./images/1.jpg",
    "hotSpots": [
        {
            "pitch": -1.148657849039082,
            "yaw": 39.77381744037859,
            "type": "scene",
            "text": "向前前往烈士陵园大门 / Proceed to the Martyrs’ Cemetery Gate",
            "sceneId": "scene2"
        },
        {
            "pitch":  -2.191863096761835,
            "yaw":  2.2433454822479293,
            "type": "info",
            "text": "碑文“桃花红而英雄血，碧海丹霞志士心”表达对英烈的敬仰。\nThe inscription honors the martyrs’ sacrifice and unwavering devotion."
        },
        {
            "pitch":  9.298994996901943,
            "yaw":  -101.05140725676438,
            "type": "info",
            "text": "提示语倡导参观者保持肃穆与尊重。\nVisitors are reminded to maintain solemnity and respect."
        }
    ]
};


// Scene 2: 烈士陵园入口
var scene2 = {
    "title": "烈士陵园入口",
    "type": "equirectangular",
    "panorama": "./images/2.jpg",
    "hotSpots": [
        {
            "pitch": -2.8022612600050727,
            "yaw": 42.60405607460119,
            "type": "scene",
            "text": "进入烈士纪念碑广场 / Enter the Memorial Plaza",
            "sceneId": "scene3"
        },
        {
            "pitch": -0.19446759775150152,
            "yaw": -49.12735735745671,
            "type": "scene",
            "text": "返回 / Back to the last site",
            "sceneId": "scene1"
        }
    ]
};


// Scene 3: 烈士纪念碑
var scene3 = {
    "title": "烈士纪念碑",
    "type": "equirectangular",
    "panorama": "./images/3.jpg",
    "hotSpots": [
        {
            "pitch": -12.654834817835269,
            "yaw": 172.22145320048796,
            "type": "scene",
            "text": "沿此离开陵园 / Exit the Memorial Area",
            "sceneId": "scene1"
        },
        {
            "pitch": -7.107188870353293,
            "yaw": -153.67373380329153,
            "type": "scene",
            "text": "返回入口 / Back to Entrance",
            "sceneId": "scene2"
        },
        {
            "pitch": -15.538816796415611,
            "yaw":  -1.6772222593386448,
            "type": "info",
            "text": "纪念碑上镌刻“革命烈士永垂不朽”，寄托人民对英烈的深切缅怀。\nThe monument bears the inscription “Eternal Glory to the Revolutionary Martyrs,” expressing enduring remembrance."
        }
    ]
};
