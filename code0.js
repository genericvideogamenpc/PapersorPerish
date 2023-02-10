gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDLogoObjects1= [];
gdjs.Untitled_32sceneCode.GDLogoObjects2= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8724308);
}
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.Untitled_32sceneCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLogoObjects1[i].getBehavior("Tween").addObjectPositionYTween("Logo", 50, "bouncePast", 2700, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameDay", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(100);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(100);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDLogoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLogoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDOnScreenControlsButtonObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
