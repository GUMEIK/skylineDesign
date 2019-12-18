// 几何方法(创建线，圆，多边形等) 得到当前位置等
define(function () {
    // 创建个圆
    function createCicle() {
        try {
            var dXCoord = -122.49460;
            var dYCoord = 37.78816;
            var dAltitude = 100.0;
            var eAltitudeTypeCode = 0;
            var dYaw = 0.0;
            var dPitch = 0.0;
            var dRoll = 0.0;
            var dDistance = 5000;
            var cPos = SGWorld.Creator.CreatePosition(dXCoord, dYCoord, dAltitude, eAltitudeTypeCode, dYaw, dPitch, dRoll, dDistance);
            console.log(cPos); {
                var nRed = 0;
                var nGreen = 255;
                var nBlue = 0;
                var nAlpha = 0x7F;
                var cFillColor = SGWorld.Creator.CreateColor(nRed, nGreen, nBlue, nAlpha);
            } {
                var nLineColor = 0xFFFF0000;
                var dCircleRadius = 200;
                var cCircle = SGWorld.Creator.CreateCircle(cPos, dCircleRadius, nLineColor, cFillColor, "", "Circle");
            } {
                var dNewCircleRadius = 300;
                var dCurrentCircleRadius = cCircle.Radius;
                cCircle.Radius = dNewCircleRadius;
                var nRGB_Red = 0xFF0000;
                var dAlpha = 0.2;
                var cFillStyle = cCircle.FillStyle;
                cFillStyle.Color.FromRGBColor(nRGB_Red);
                cFillStyle.Color.SetAlpha(dAlpha);
            } {
                var eMsgClient = 5; //MsgClient6.MC_POPUP; 
                var tMessage = "Hello Circle";
                var eMsgType = 0; //MsgType.TYPE_TEXT; 
                var bIsBringToFront = true; // F2. Create message and add to circle 
                var cMessage = SGWorld.Creator.CreateMessage(eMsgClient, tMessage, eMsgType, bIsBringToFront);
                cCircle.Message.MessageID = cMessage.ID;
            } {
                var cFlyToPos = cPos.Copy();
                cFlyToPos.Pitch = -89.0; // Set camera to look downward on circle
                SGWorld.Navigate.FlyTo(cFlyToPos);
            }
        } catch (e) {
            alert("Unexpected error: " + e.description);
        }
    }
    // 得到当前位置
    function GetPosition() {
        try {
            // get our current position 
            var currentPos = SGWorld.Navigate.GetPosition(3 /*AltitudeTypeCode.ATC_TERRAIN_ABSOLUTE*/ );
            // show details of current position 
            alert("Current position in the world:\r\n" +
                "Altitude = " + currentPos.Altitude + "\r\n" +
                "AltitudeType = " + currentPos.AltitudeType + "\r\n" +
                "Distance = " + currentPos.Distance + "\r\n" +
                "Yaw = " + currentPos.Yaw + "\r\n" +
                "Pitch = " + currentPos.Pitch + "\r\n" +
                "Roll = " + currentPos.Roll + "\r\n" +
                "X = " + currentPos.X + "\r\n" +
                "Y= " + currentPos.Y + "\r\n");
        } catch (ex) {
            alert("Unexpected error: " + ex.description);
        }
    }

    function CreatePolygon(coordinate) {
        // 返回值为创建出来的几何对象
        try {
            {
                //B1. Create vertices double array, each point in format x,z,y
                var cVerticesArray = coordinate || [
                    -122.415025, 37.76059, 10,
                    -122.415868, 37.760546, 11,
                    -122.415922, 37.761244, 12,
                    -122.415592, 37.761254, 13,
                    -122.415557, 37.760973, 14,
                    -122.415081, 37.76099, 15
                ];
                // B2. Create linear ring using vertices
                {
                    var cRing = SGWorld.Creator.GeometryCreator.CreateLinearRingGeometry(cVerticesArray);
                }
            }
            // C. Create polygon geometry using linear ring
            //
            {
                var cPolygonGeometry = SGWorld.Creator.GeometryCreator.CreatePolygonGeometry(cRing, null);
            }
            // D. Create polygon using polygon geometry
            {
                var nLineColor = 0xFF00FF00; // Abgr value -> solid green
                var nFillColor = 0x7FFF0000; // Abgr value -> 50% transparent blue
                var eAltitudeTypeCode = 0; //AltitudeTypeCode.ATC_TERRAIN_RELATIVE;
                // D2. Create polygon
                cPolygon = SGWorld.Creator.CreatePolygon(cPolygonGeometry, nLineColor, nFillColor, eAltitudeTypeCode, "", "Polygon");
            } {
                SGWorld.Navigate.FlyTo(cPolygon);
            }
            return cPolygonGeometry;
        } catch (e) {
            alert("unexpected error: " + e.description);
        }
    }
    // 创建线
    function createLine(arg) {
        // GeometryCreator 创建几何对象的方法
        // CreateLineStringGeometry 创建一个线对象
        // "LineString(110.9898247 19.64392506 30,110.9896247 19.64653288 30,110.9876747 19.64603288 30)"
        // 传入的对象包含，经度-维度-坐标
        let coordinate = arg || [
            110.9898247, 19.64392506, 300,
            110.9896247, 19.64653288, 300,
            110.9876747, 19.64603288, 300
        ]
        var geometry = SGWorld.Creator.GeometryCreator.CreateLineStringGeometry(arg);
        //创建颜色
        var color = SGWorld.Creator.CreateColor(255, 0, 0, 0.7);
        //创建折线Creates a polyline in the 3D Window.
        /**
	 * {
	 * 	Geometry,  几何对象
       LineColor,  渐变
       AltitudeType,  海拔高度类型
       GroupID,       id，要将创建的对象放入哪一个组
       Description   描述
	 * }
	 */
        var line = SGWorld.Creator.CreatePolyline(geometry, color, 0, '', "几何折线");
        //飞行到该折线
        SGWorld.Navigate.FlyTo(line);
        // CreatDistanceLabel(110.9898247, 19.64392506, 110.9896247, 19.64653288);
        // CreatDistanceLabel(110.9896247, 19.64653288, 110.9876747, 19.64603288);

    }
    // 测量距离
    function measureArea(pIGeometry) {
        // 传入几何对象
        // SGWorld.An
        return SGWorld.Analysis.MeasureTerrainArea(pIGeometry)
    }
    // 创建组
    function createGroup(groupName){
        groupName = groupName || '默认组'
        // createGroup的返回值为新建组的id
        // 可以使用DeleteItem删除这个组
        return SGWorld.ProjectTree.createGroup(groupName);
    }
    return {
        createCicle:createCicle,
        GetPosition:GetPosition,
        CreatePolygon:CreatePolygon,
        createLine:createLine,
        measureArea:measureArea,
        createGroup:createGroup
    }

});