(function(){
    require.config({
        baseUrl:'./module',
        paths:{
            init:'init'
        }
    })
    require(['init'])
}())
// 定义全局变量
window.isCreate3DViewshed = false;


