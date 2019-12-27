define( function(require, factory) {
    // 鼠标选择区域创建
    let button6 = document.getElementById('button6');
    button6.onclick = function(){
        // console.log('button6')
        window.isCreate3DViewshed = true;
        if(window.isCreate3DViewshed){
            StartCal();
        }
    }
    var gPolyObj = null;
    function StartCal() {
        // debugger;
        SGWorld.AttachEvent("OnLButtonDown", DrawPolyLButtonDown);
        SGWorld.AttachEvent("OnFrame", DrawPolyOnFrame);
        // 改变鼠标样式
        SGWorld.Window.SetInputMode(1);
    }
    function EndCal() {
        SGWorld.DetachEvent("OnLButtonDown", DrawPolyLButtonDown);
        SGWorld.DetachEvent("OnFrame", DrawPolyOnFrame);
        SGWorld.Window.SetInputMode(0);
        gPolyObj = null;
    }
    function CreateTempGroup(groupname) {
        var gid = SGWorld.ProjectTree.FindItem(groupname);
        if (gid != SGWorld.ProjectTree.RootID) {
        } else {
            gid = SGWorld.ProjectTree.CreateLockedGroup(groupname, SGWorld.ProjectTree.RootID);
        }
        return gid;
    }
    var gPolyText = "视域分析";
    function DrawPolyLButtonDown(Flags, X, Y) {
        try {
            var CursorCoord = SGWorld.window.pixelToWorld(X, Y);
            if (CursorCoord == null)
                return false;
            if (gPolyObj == null) {
                var gid = CreateTempGroup("视频监控范围");
                var pos = SGWorld.Creator.CreatePosition(CursorCoord.Position.X, CursorCoord.Position.Y, CursorCoord.Position.Altitude, CursorCoord.Position.AltitudeType, 0, 0, 0, 0);
                gPolyObj = SGWorld.Analysis.Create3DViewshed(pos, 90, 60, 10, gid, "视频监控范围");
            } else {
                EndCal();
            }
        } catch (e)
        {
            alert(e);
        }
    }
    function DrawPolyOnFrame() {
        try {
            if (gPolyObj != null) {
                var mouseInfo = SGWorld.Window.GetMouseInfo();
                var CursorCoord = SGWorld.Window.pixelToWorld(mouseInfo.X, mouseInfo.Y);
                if (CursorCoord == null)
                    return false;
                var dr = gPolyObj.Position.DistanceTo(CursorCoord.Position);
                var dpos = gPolyObj.Position.AimTo(CursorCoord.Position);
                gPolyObj.Distance = dr;
                gPolyObj.Position.Yaw = dpos.Yaw;
            }
        } catch (e) {}
    }
});