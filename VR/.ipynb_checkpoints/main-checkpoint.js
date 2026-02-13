pannellum.viewer('panorama', {
    "default": {
        "firstScene": "scene1",
    },
    "scenes": {
        // 左边的 "scene1" 是 ID (给 HTML 用的)
        // 右边的 scene1 是变量名 (对应 scene1.js 里的 var scene1)
        "scene1": scene1, 
        "scene2": scene2
    }
});
