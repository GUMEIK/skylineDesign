// // 事件绑定模块
define('bindEvent', [
    // 引入获取元素模块依赖
    './getElement',
    './geometry'
], function (el,geo) {
    el.openBtn.onclick = function () {
        SGWorld.Project.Open("D:\\skyline_builder\\TerraExplorer\\Tools\\Data-Library\\Layers\\Countries\\Countries.FLY");
        // D:\skyline\Resources\Default_Local_Terrain.mpt
        // SGWorld.Project.Open("D:\\skyline\\Resources\\Default_Local_Terrain.mpt");
    }
    el.createCicleBtn.onclick = function () {
        geo.createCicle();
    }
    el.getCurPositionBtn.onclick = function () {
        geo.GetPosition();
    }
    el.CreatePolygonBtn.onclick = function () {
        geo.CreatePolygon(coordinateArr);
    }
    el.ZoomInBtn.onclick = function () {
        SGWorld.Navigate.ZoomIn();
    }
    el.ZoomOutBtn.onclick = function () {
        // SGWorld.Window
        SGWorld.Navigate.ZoomOut();
    }
    // 创建线
    el.createLineBtn.onclick = function () {
        geo.createLine(coordinateArr)
    }
    // 测量面积
    el.measureAreaBtn.onclick = function () {
        let area = geo.measureArea(geo.CreatePolygon(coordinateArr));
        console.log(area)
    }
    // 创建组
    el.createGroupBtn.onclick = function () {
        geo.createGroup('新的组')
    }

    // 界面点击事件OnLButtonClicked中的事件
    // OnLButtonClicked 双击事件
    // OnLButtonClicked 按下事件
    // 定义收集点的数组
    var coordinateArr = []
    // SGWorld.AttachEvent("OnLButtonClicked", function (flag, x, y) {
        // SGWorld.Window.SetInputMode(1);
        // alert(`${flag}${x}${y}`)
        // alert('x='+ x + 'y=' + y + 'flag' + flag)
        // return false;
        // 返回窗口中指定像素的真实世界坐标
        // debugger;
        // let realWorld = SGWorld.window.PixelToWorld(x, y, 1);
        // 真实世界的经度
        // let realX = realWorld.Position.X,
            // 维度
            // realY = realWorld.Position.Y;
        // coordinateArr.push(realX, realY)
        // coordinateArr.push(30)
        // console.log(coordinateArr)
        // geo.createLine(coordinateArr)
        // CreatePolygon(coordinateArr)
        // console.log(realX)
        // console.log(realY)
        // console.log(realWorld)
    // })
});