define(function (require, factory) {
  let TerraExplorerInformationWindowEx = document.getElementById('TerraExplorerInformationWindowEx');
  let TerraExplorer3DWindowEx = document.getElementById('TerraExplorer3DWindowEx');
  // 将三维控件和信息树关联
  TerraExplorerInformationWindowEx.AttachTo3dWindow(TerraExplorer3DWindowEx);
  // 创建SGWorld对象,挂载到window
  window.SGWorld = TerraExplorer3DWindowEx.CreateInstance("TerraExplorerX.SGWorld701");
});