// 获取元素
define('getElement', [
    // 定义依赖项
], function () {
    // 'use strict';
    let wrapperMain = document.getElementsByClassName('wrapper')[0];
    let rightContent = document.getElementsByClassName('rightContent')[0];
    let openBtn = document.getElementById('openProj');
    let createCicleBtn = document.getElementById('createCicle');
    let getCurPositionBtn = document.getElementById('getCurPosition');
    let CreatePolygonBtn = document.getElementById('CreatePolygon');
    let ZoomInBtn = document.getElementById('ZoomIn');
    let ZoomOutBtn = document.getElementById('ZoomOut');
    let createLineBtn = document.getElementById('createLine');
    let measureAreaBtn = document.getElementById('measureArea');
    let createGroupBtn = document.getElementById('createGroup');
    return {
        wrapperMain:wrapperMain,
        rightContent:rightContent,
        openBtn:openBtn,
        createCicleBtn:createCicleBtn,
        getCurPositionBtn:getCurPositionBtn,
        CreatePolygonBtn:CreatePolygonBtn,
        ZoomInBtn:ZoomInBtn,
        ZoomOutBtn:ZoomOutBtn,
        createLineBtn:createLineBtn,
        measureAreaBtn:measureAreaBtn,
        createCicleBtn:createCicleBtn,
        createGroupBtn:createGroupBtn
    }
});