// Scene 1: 入口
var scene1 = {
    "title": "昆曲博物馆入口 / Museum Entrance",
    "type": "equirectangular",
    "panorama": "./images/1.jpg",
    "autoLoad": true,
    "hotSpots": [
        {
            "pitch": 3, "yaw": 0,
            "type": "scene",
            "text": "进入博物馆 / Enter Museum",
            "sceneId": "scene2"
        },
        {
            "pitch": 2, "yaw": -41.5, 
            "type": "info",
            "text": "亭林花事广告牌：展示昆山亭林园四季花卉活动信息。\nTinglin Flower Event Billboard: Information on seasonal flower events."
        },
        {
            "pitch": -8, "yaw": -24, 
            "type": "info",
            "text": "石狮：传统中国建筑的守护兽，寓意威严与吉祥。\nStone Lions: Guardians in traditional Chinese architecture, symbolizing majesty and luck."
        }
    ]
};

// Scene 2: 庭院入口
var scene2 = {
    "title": "前厅 / Front Hall",
    "type": "equirectangular",
    "panorama": "./images/2.jpg",
    "autoLoad": true,
    "hotSpots": [
        {
            "pitch": -8.7, "yaw": -50.9,
            "type": "scene",
            "text": "进入庭院 / Enter Courtyard",
            "sceneId": "scene3"
        },
        {
            "pitch": -3.64, "yaw": 177.16,
            "type": "scene",
            "text": "回到入口 / Back to Entrance",
            "sceneId": "scene1"
        },
        {
            "pitch": 2.84, "yaw": 1.84, 
            "type": "info",
            "text": "数字展示屏：循环播放昆曲经典剧目与历史故事。\nDigital Display: Loops classic Kunqu Opera plays and historical stories."
        }
    ]
};

// Scene 3: 连廊与水池
var scene3 = {
    "title": "园林回廊 / Garden Corridor",
    "type": "equirectangular",
    "panorama": "./images/3.jpg",
    "autoLoad": true,
    "hotSpots": [
        {
            "pitch": -8, "yaw": 55.64,
            "type": "scene",
            "text": "观赏水池 / View Pond",
            "sceneId": "scene4"
        },
        {
            "pitch": -6.26, "yaw": 100.44,
            "type": "scene",
            "text": "回到前厅 / Back to Hall",
            "sceneId": "scene2" // 修正：回到显示屏应该是 scene2
        },
        {
            "pitch": -1.24, "yaw": -50.78, 
            "type": "info",
            "text": "花窗与回廊：典型的江南园林“移步换景”设计。\nLattice Windows & Corridor: Classic Jiangnan garden design creating 'changing scenery with every step'."
        }
    ]
};

// Scene 4: 水池假山
var scene4 = {
    "title": "锦鲤池 / Koi Pond",
    "type": "equirectangular",
    "panorama": "./images/4.jpg",
    "autoLoad": true,
    "hotSpots": [
        {
            "pitch": 0.35, "yaw": 180,
            "type": "scene",
            "text": "进入展厅 / Enter Exhibition",
            "sceneId": "scene5"
        },
        {
            "pitch": -1.45, "yaw": 52,
            "type": "scene",
            "text": "回到回廊 / Back to Corridor",
            "sceneId": "scene3"
        },
        {
            "pitch": 1.34, "yaw": 3.35, 
            "type": "info",
            "text": "叠石理水：太湖石堆叠的假山与游鱼，充满生机。\nRockery & Water: Taihu stones piled into artificial hills with swimming fish."
        }
    ]
};

// Scene 5: 历史展厅
var scene5 = {
    "title": "历史展厅 / History Hall",
    "type": "equirectangular",
    "panorama": "./images/5.jpg",
    "autoLoad": true,
    "hotSpots": [
        {
            "pitch": -4.89, "yaw": 43.75,
            "type": "scene",
            "text": "查看展览墙 / View Wall",
            "sceneId": "scene6"
        },
        {
            "pitch": -21, "yaw": 177,
            "type": "scene",
            "text": "回到庭院 / Back to Courtyard",
            "sceneId": "scene4"
        },
        {
            "pitch": -4.02, "yaw": 1, 
            "type": "info",
            "text": "求学雕塑：生动还原了古代昆曲艺人学艺的场景。\nApprenticeship Sculpture: Vividly restores the scene of ancient Kunqu artists learning the craft."
        }
    ]
};

// Scene 6: 名家墙
var scene6 = {
    "title": "名家长廊 / Master's Corridor",
    "type": "equirectangular",
    "panorama": "./images/6.jpg",
    "autoLoad": true,
    "hotSpots": [
        {
            "pitch": -2.76, "yaw": 93.84,
            "type": "scene",
            "text": "前往后院 / To Backyard",
            "sceneId": "scene7"
        },
        {
            "pitch": -5.58, "yaw": -55.21,
            "type": "scene",
            "text": "回到雕塑区 / Back to Sculpture",
            "sceneId": "scene5"
        },
        {
            "pitch": 4, "yaw": 28, 
            "type": "info",
            "text": "名家肖像：汤显祖（《牡丹亭》作者）与顾阿瑛（昆山名士）。\nPortraits of Masters: Tang Xianzu (Playwright) and Gu Aying (Patron of Arts)."
        }
    ]
};

// Scene 7: 长生殿浮雕
var scene7 = {
    "title": "浮雕墙 / Relief Wall",
    "type": "equirectangular",
    "panorama": "./images/7.jpg",
    "autoLoad": true,
    "hotSpots": [
        {
            "pitch": 5.11, "yaw": 53.27,
            "type": "scene",
            "text": "前往戏台 / To Opera Stage",
            "sceneId": "scene8"
        },
        {
            "pitch": -21.65, "yaw": -108.37,
            "type": "scene",
            "text": "回到长廊 / Back to Corridor",
            "sceneId": "scene6"
        },
        {
            "pitch": -6.13, "yaw": 113.71, 
            "type": "info",
            "text": "《长生殿》石刻：描绘唐明皇与杨贵妃跨越生死的爱情史诗。\n'The Palace of Eternal Life': Stone carving depicting the epic romance of Emperor Xuanzong and Lady Yang."
        }
    ]
};

// Scene 8: 古戏台
var scene8 = {
    "title": "古戏台 / Ancient Stage",
    "type": "equirectangular",
    "panorama": "./images/8.jpg",
    "autoLoad": true,
    "hotSpots": [
        {
            "pitch": 0.50, "yaw": 9.22,
            "type": "scene",
            "text": "结束游览 / Exit",
            "sceneId": "scene1" 
        },
        {
            "pitch": 4.13, "yaw": -24.18,
            "type": "info",
            "text": "出将：演员上场的门。\n'Chu Jiang': Entrance for generals (actors entering stage)."
        },
        {
            "pitch": 6.57, "yaw": 40.81,
            "type": "info",
            "text": "入相：演员下场的门。\n'Ru Xiang': Exit for ministers (actors leaving stage)."
        },
        {
            "pitch": 0.71, "yaw": -171.94,
            "type": "info",
            "text": "盛世元音：赞誉昆曲为太平盛世的雅正之音。\n'Sound of the Prosperous Age': Praising Kunqu as the elegant music of a golden era."
        },
        {
            "pitch": 59.17, "yaw": 6.06,
            "type": "info",
            "text": "藻井：螺旋状的穹顶结构，起到扩音和装饰作用。\nCaisson Ceiling: Spiral dome structure for acoustic amplification and decoration."
        }
    ]
};
