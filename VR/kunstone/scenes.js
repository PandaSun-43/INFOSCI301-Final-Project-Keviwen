// Scene 1: 入口
var scene1 = {
    "title": "昆石馆入口",
    "type": "equirectangular",
    "panorama": "./images/1.jpg",
    "hotSpots": [
        {
            "pitch": -8.32426558464981,
            "yaw": 2.0124138590769967,
            "type": "scene",
            "text": "沿此进入昆石馆 / Enter the Kun Stone Gallery",
            "sceneId": "scene2"
        }
    ]
};


// Scene 2: 庭院
var scene2 = {
    "title": "昆石馆庭院",
    "type": "equirectangular",
    "panorama": "./images/2.jpg",
    "hotSpots": [
        {
            "pitch": -4.503122230720324,
            "yaw": 5.02021794324855,
            "type": "scene",
            "text": "进入昆石展厅 / Enter the Exhibition Hall",
            "sceneId": "scene3"
        },
        {
            "pitch": -10.542559523398262,
            "yaw": 177.4344765299376,
            "type": "scene",
            "text": "返回入口 / Back to Entrance",
            "sceneId": "scene1"
        },
        {
            "pitch": 38.064737751535525,
            "yaw": 34.23225350764479,
            "type": "info",
            "text": "牌匾题“昆山有玉，玉在其人”，寓意人品如玉。\nThe plaque reads “Kunshan has jade, and jade lies in its people,” symbolizing virtue and integrity."
        }
    ]
};


// Scene 3: 展厅门口
var scene3 = {
    "title": "昆石展厅入口",
    "type": "equirectangular",
    "panorama": "./images/3.jpg",
    "hotSpots": [
        {
            "pitch": -9.91060635762504,
            "yaw": -82.40752568183821,
            "type": "scene",
            "text": "前往“玉出昆冈”展区 / Proceed to “Jade from Kun Ridge”",
            "sceneId": "scene4"
        },
        {
            "pitch": -9.87277736524046,
            "yaw": 170.01961207123935,
            "type": "scene",
            "text": "返回庭院 / Back to Courtyard",
            "sceneId": "scene2"
        },
        {
            "pitch": -18.847055610202762,
            "yaw": 15.545154873626823,
            "type": "info",
            "text": "昆山石产于马鞍山，以色白质润者为上品。\nKunshan stones originate from Mount Ma’an, prized for their pale color and smooth texture."
        }
    ]
};


// Scene 4: 玉出昆冈
var scene4 = {
    "title": "玉出昆冈",
    "type": "equirectangular",
    "panorama": "./images/4.jpg",
    "hotSpots": [
        {
            "pitch": -14.728117939434052,
            "yaw": 123.41620086848911,
            "type": "scene",
            "text": "探索下一排昆石 / Explore the Next Collection",
            "sceneId": "scene5"
        },
        {
            "pitch": -11.248163574820746,
            "yaw": -170.89271327983613,
            "type": "scene",
            "text": "返回入口 / Back to Entrance",
            "sceneId": "scene3"
        },
        {
            "pitch": -35.890200772880014,
            "yaw": -21.71379444699697,
            "type": "info",
            "text": "《玉出昆冈》介绍昆石的地质形成与文化价值。\n“Jade from Kun Ridge” introduces the geological formation and cultural significance of Kun stones."
        },
        {
            "pitch": -24.4637900441664,
            "yaw": -116.51662528712237,
            "type": "info",
            "text": "馆内陈列形态各异的昆石精品。\nThe gallery displays a variety of uniquely shaped Kun stone specimens."
        }
    ]
};


// Scene 5: 精品展区
var scene5 = {
    "title": "昆石精品展区",
    "type": "equirectangular",
    "panorama": "./images/5.jpg",
    "hotSpots": [
        {
            "pitch": -5.874653907709806,
            "yaw": 92.64106740098771,
            "type": "scene",
            "text": "继续前进 / Continue Forward",
            "sceneId": "scene6"
        },
        {
            "pitch": -12.740809550888512,
            "yaw": -106.44575799695528,
            "type": "scene",
            "text": "返回上一展区 / Back to Previous Section",
            "sceneId": "scene4"
        },
        {
            "pitch": 16.765879720808357,
            "yaw": -2.6823610014254107,
            "type": "info",
            "text": "“玉兔”，形似跃动的白兔。\n“Jade Rabbit,” resembling a leaping white rabbit."
        },
        {
            "pitch": -3.9653375701994906,
            "yaw": -32.42315579714557,
            "type": "info",
            "text": "“玉雪层云”，层理分明如云雪。\n“Snowy Layers,” with textures resembling drifting clouds."
        },
        {
            "pitch": 13.302162075664851,
            "yaw": 46.26435588020088,
            "type": "info",
            "text": "“满园春色”，石纹如春景铺展。\n“Spring in Full Bloom,” evoking a flourishing garden."
        },
        {
            "pitch": 6.848035781213279,
            "yaw": -158.86877838470082,
            "type": "info",
            "text": "“玉影晚霞”，色泽如落日余晖。\n“Evening Glow,” reflecting hues of sunset light."
        },
        {
            "pitch": -7.928921099373543,
            "yaw": 162.37909964653588,
            "type": "info",
            "text": "“晨海聚云”，纹理似海上晨雾。\n“Morning Sea Clouds,” with patterns like mist over the sea."
        },
        {
            "pitch": 8.710901367000321,
            "yaw": 123.52527205048649,
            "type": "info",
            "text": "“乘风破浪”，姿态如破浪前行。\n“Riding the Waves,” suggesting forward momentum."
        }
    ]
};


// Scene 6: 展厅二
var scene6 = {
    "title": "昆石文化展厅",
    "type": "equirectangular",
    "panorama": "./images/6.jpg",
    "hotSpots": [
        {
            "pitch": -12.56486639866234,
            "yaw": -132.48397342285813,
            "type": "scene",
            "text": "沿此出馆 / Exit the Gallery",
            "sceneId": "scene1"
        },
        {
            "pitch": -7.9861510455597875,
            "yaw": 63.44106245794866,
            "type": "scene",
            "text": "返回精品展区 / Back to Featured Collection",
            "sceneId": "scene5"
        },
        {
            "pitch": -24.248854407040344,
            "yaw": -25.854431118527064,
            "type": "info",
            "text": "巨型昆石展示自然雕琢之美。\nA massive Kun stone showcases nature’s sculptural artistry."
        },
        {
            "pitch": -16.218542690992383,
            "yaw": -177.6064089430617,
            "type": "info",
            "text": "《昆山石歌》以诗歌形式赞颂昆石之美。\n“The Song of Kunshan Stone” praises its beauty through poetry."
        }
    ]
};
