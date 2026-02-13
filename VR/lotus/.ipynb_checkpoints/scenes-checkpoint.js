// Scene 1: 陵园湖景
var scene1 = {
    "title": "陵园湖景",
    "type": "equirectangular",
    "panorama": "./images/1.jpg",
    "hotSpots": [
        {
            "pitch": -19.88877647069626,
            "yaw": 28.05412429476387,
            "type": "scene",
            "text": "沿此路前往爱莲亭 / Walk Toward Ailian Pavilion",
            "sceneId": "scene2"
        },
        {
            "pitch": -18.765337546035397,
            "yaw":  -40.23899761606092,
            "type": "info",
            "text": "湖面开阔，夏季荷花盛放。\nThe expansive lake blooms with lotus flowers in summer."
        },
        {
            "pitch": 21.626204020259546,
            "yaw":  42.21388071103564,
            "type": "info",
            "text": "节日期间悬挂红灯笼，增添喜庆氛围。\nRed lanterns are hung during festivals, adding a festive touch."
        }
    ]
};


// Scene 2: 爱莲亭
var scene2 = {
    "title": "爱莲亭",
    "type": "equirectangular",
    "panorama": "./images/2.jpg",
    "hotSpots": [
        {
            "pitch": -18.609438526353248,
            "yaw": -126.10666134085436,
            "type": "scene",
            "text": "沿此离开 / Exit This Way",
            "sceneId": "scene1"
        },

        {
            "pitch": 39.5727694815813,
            "yaw":  4.7170699608620765,
            "type": "info",
            "text": "亭额题名“爱莲亭”，取意清雅高洁。\nThe pavilion bears the name “Ailian Pavilion,” symbolizing purity and elegance."
        },
        {
            "pitch": -7.117899518209666,
            "yaw":  -15.760817475609453,
            "type": "info",
            "text": "此处为夏日观赏荷花的最佳观赏位。\nThis spot offers an ideal view of the lotus pond in summer."
        }
    ]
};
