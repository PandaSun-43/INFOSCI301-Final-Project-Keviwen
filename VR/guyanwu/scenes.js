// Scene 1: 入口
var scene1 = {
    "title": "顾炎武雕像",
    "type": "equirectangular",
    "panorama": "./images/1.jpg",
    "hotSpots": [
        {
            "pitch": -2.034755792970036,
            "yaw": -57.56587989674493,
            "type": "scene",
            "text": "沿此路进入顾炎武纪念馆 / Enter the Memorial Hall",
            "sceneId": "scene2"
        },
        {
            "pitch": 12.091108005006895,
            "yaw": 18.174817862434278,
            "type": "info",
            "text": "顾炎武（1613–1682），明末清初思想家，倡导“经世致用”。\nGu Yanwu (1613–1682) was a late Ming–early Qing scholar who advocated practical learning for real-world governance."
        },
        {
            "pitch": 10.939111753164116,
            "yaw": -25.34295994277843,
            "type": "info",
            "text": "“天下兴亡，匹夫有责”，强调个人对国家的责任。\n“The rise and fall of a nation concerns every individual,” emphasizing civic responsibility."
        }
    ]
};


// Scene 2: 庭院入口
var scene2 = {
    "title": "纪念馆庭院",
    "type": "equirectangular",
    "panorama": "./images/2.jpg",
    "hotSpots": [
        {
            "pitch": -16.253364450585956,
            "yaw": -5.353015198354362,
            "type": "scene",
            "text": "进入纪念馆 / Enter the Memorial Hall",
            "sceneId": "scene3"
        },
        {
            "pitch": -4.7126226761233525,
            "yaw": 169.8418224536344,
            "type": "scene",
            "text": "返回顾炎武雕像 / Back to the Statue",
            "sceneId": "scene1"
        },
        {
            "pitch": -14.850265629391016,
            "yaw": 61.21465384764798,
            "type": "info",
            "text": "庭院中的骏马雕塑象征忠诚与坚韧。\nThe horse sculptures symbolize loyalty and perseverance."
        }
    ]
};


// Scene 3: 门口
var scene3 = {
    "title": "纪念馆门口",
    "type": "equirectangular",
    "panorama": "./images/3.jpg",
    "hotSpots": [
        {
            "pitch": -30.175991857535884,
            "yaw": -6.845812244794428,
            "type": "scene",
            "text": "向前进入展厅 / Enter the Hall",
            "sceneId": "scene4"
        },
        {
            "pitch": -17.023131720852916,
            "yaw": 171.3450110495803,
            "type": "scene",
            "text": "返回庭院 / Back to Courtyard",
            "sceneId": "scene2"
        },
        {
            "pitch": 23.966438836893836,
            "yaw": 23.063135344089602,
            "type": "info",
            "text": "门匾题“继往圣绝学，开万世太平”，表达传承与开创。\nThe plaque reads “Carry forward lost wisdom and open an era of peace,” expressing continuity and renewal."
        }
    ]
};


// Scene 4: 大厅
var scene4 = {
    "title": "纪念馆大厅",
    "type": "equirectangular",
    "panorama": "./images/4.jpg",
    "hotSpots": [
        {
            "pitch": -2.056917022278618,
            "yaw": -81.18328290204347,
            "type": "scene",
            "text": "进入展厅 / Enter Exhibition",
            "sceneId": "scene5"
        },
        {
            "pitch": -18.956624004319455,
            "yaw": 172.57068900245022,
            "type": "scene",
            "text": "返回门口 / Back to Entrance",
            "sceneId": "scene3"
        },
        {
            "pitch": -18.80380726309493,
            "yaw": 14.292010766124712,
            "type": "info",
            "text": "中央为顾炎武金色半身像，上题“心同山河”。\nThe golden bust bears the phrase “Heart as Vast as Mountains and Rivers,” symbolizing devotion to the nation."
        }
    ]
};


// Scene 5: 展厅1
var scene5 = {
    "title": "展厅一",
    "type": "equirectangular",
    "panorama": "./images/5.jpg",
    "hotSpots": [
        {
            "pitch": -0.973294886648941,
            "yaw": 152.23491340452952,
            "type": "scene",
            "text": "前往下一个展厅 / Next Hall",
            "sceneId": "scene6"
        },
        {
            "pitch": -11.919521616027723,
            "yaw": -118.15081988402716,
            "type": "scene",
            "text": "返回大厅 / Back to Main Hall",
            "sceneId": "scene4"
        },
        {
            "pitch": -31.72141695368954,
            "yaw": -64.20748170189285,
            "type": "info",
            "text": "展板介绍顾炎武生平与学术贡献。\nThe panels present his life and contributions to scholarship."
        },
        {
            "pitch": -11.035259989017371,
            "yaw": 66.34307488379812,
            "type": "info",
            "text": "山水画体现传统文人精神。\nThe landscape paintings reflect traditional literati aesthetics."
        },
        {
            "pitch": -7.316165772754519,
            "yaw": -165.77472862867305,
            "type": "info",
            "text": "名言成为近代爱国思想的重要象征。\nHis famous quote later became a symbol of modern patriotism."
        }
    ]
};


// Scene 6: 展厅2
var scene6 = {
    "title": "展厅二",
    "type": "equirectangular",
    "panorama": "./images/6.jpg",
    "hotSpots": [
        {
            "pitch": -10.690965360896813,
            "yaw": 92.3167448457109,
            "type": "scene",
            "text": "前往展厅三 / Proceed to Hall Three",
            "sceneId": "scene7"
        },
        {
            "pitch": -10.039059800499293,
            "yaw": -92.95664891278614,
            "type": "scene",
            "text": "返回展厅一 / Back to Hall One",
            "sceneId": "scene5"
        },
        {
            "pitch": -26.903714468291803,
            "yaw": 5.186660436934412,
            "type": "info",
            "text": "“归奇顾怪”展现昆山两位独特学者。\n“Gui the eccentric, Gu the unconventional” highlights two distinctive scholars from Kunshan."
        }
    ]
};


// Scene 7: 展厅3
var scene7 = {
    "title": "展厅三",
    "type": "equirectangular",
    "panorama": "./images/7.jpg",
    "hotSpots": [
        {
            "pitch": -9.380569494705124,
            "yaw": -120.04851769233137,
            "type": "scene",
            "text": "前往室外走廊 / Exit to Corridor",
            "sceneId": "scene8"
        },
        {
            "pitch": -5.697284695507301,
            "yaw": 119.4202200856138,
            "type": "scene",
            "text": "返回展厅二 / Back to Hall Two",
            "sceneId": "scene6"
        },
        {
            "pitch": -40.864697216327826,
            "yaw": 41.02389913241569,
            "type": "info",
            "text": "祖父以草根示之，启发其关注民生。\nHis grandfather once pointed to grass roots, inspiring his concern for common people."
        },
        {
            "pitch": -31.13063559492521,
            "yaw": -142.97730921112156,
            "type": "info",
            "text": "祖母殉节前的遗言影响其民族气节。\nHis grandmother’s final words shaped his moral integrity."
        }
    ]
};


// Scene 8: 走廊
var scene8 = {
    "title": "走廊与出口",
    "type": "equirectangular",
    "panorama": "./images/8.jpg",
    "hotSpots": [
        {
            "pitch": -2.516087296797028,
            "yaw": 104.56826845982715,
            "type": "scene",
            "text": "结束游览 / Exit Tour",
            "sceneId": "scene1"
        },
        {
            "pitch": 5.710347135396615,
            "yaw": 6.471928135108272,
            "type": "info",
            "text": "碑文“爱国精英”赞颂其家国情怀。\nThe inscription honors his patriotic devotion."
        },
        {
            "pitch": 12.942084961770796,
            "yaw": -38.4987318280226,
            "type": "info",
            "text": "《顾亭林京口即事》表达忧国忧民之情。\n“Gu Tinglin's Reflections at Jingkou” expresses deep concern for the nation."
        },
        {
            "pitch": -7.276342273968465,
            "yaw": 83.43282012784499,
            "type": "info",
            "text": "长廊通向出口，旅程在此结束。\nThe corridor leads to the exit, marking the end of the journey."
        }
    ]
};
