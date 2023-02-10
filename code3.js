gdjs.GameOverCode = {};
gdjs.GameOverCode.GDNewTextObjects1= [];
gdjs.GameOverCode.GDNewTextObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};


gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDNewTextObjects1.length = 0;
gdjs.GameOverCode.GDNewTextObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);

return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
