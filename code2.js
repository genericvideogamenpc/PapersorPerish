gdjs.GameNightCode = {};
gdjs.GameNightCode.GDNewSpriteObjects1= [];
gdjs.GameNightCode.GDNewSpriteObjects2= [];
gdjs.GameNightCode.GDNewTextObjects1= [];
gdjs.GameNightCode.GDNewTextObjects2= [];
gdjs.GameNightCode.GDNewText2Objects1= [];
gdjs.GameNightCode.GDNewText2Objects2= [];
gdjs.GameNightCode.GDDocsRemObjects1= [];
gdjs.GameNightCode.GDDocsRemObjects2= [];
gdjs.GameNightCode.GDCollectedObjects1= [];
gdjs.GameNightCode.GDCollectedObjects2= [];
gdjs.GameNightCode.GDSpentObjects1= [];
gdjs.GameNightCode.GDSpentObjects2= [];
gdjs.GameNightCode.GDSuppliesObjects1= [];
gdjs.GameNightCode.GDSuppliesObjects2= [];
gdjs.GameNightCode.GDHappinessObjects1= [];
gdjs.GameNightCode.GDHappinessObjects2= [];
gdjs.GameNightCode.GDOnScreenControlsButtonObjects1= [];
gdjs.GameNightCode.GDOnScreenControlsButtonObjects2= [];

gdjs.GameNightCode.conditionTrue_0 = {val:false};
gdjs.GameNightCode.condition0IsTrue_0 = {val:false};
gdjs.GameNightCode.condition1IsTrue_0 = {val:false};
gdjs.GameNightCode.condition2IsTrue_0 = {val:false};
gdjs.GameNightCode.conditionTrue_1 = {val:false};
gdjs.GameNightCode.condition0IsTrue_1 = {val:false};
gdjs.GameNightCode.condition1IsTrue_1 = {val:false};
gdjs.GameNightCode.condition2IsTrue_1 = {val:false};


gdjs.GameNightCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameNightCode.condition0IsTrue_0.val = false;
{
{gdjs.GameNightCode.conditionTrue_1 = gdjs.GameNightCode.condition0IsTrue_0;
gdjs.GameNightCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8759100);
}
}if (gdjs.GameNightCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("Collected").setNumber(gdjs.randomInRange(4, 12));
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Collected")));
}{runtimeScene.getScene().getVariables().get("Spent").setNumber(gdjs.randomInRange(36, 58) + ((Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Days"))) * gdjs.randomFloatInRange(2, 8))));
}{runtimeScene.getGame().getVariables().getFromIndex(2).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Spent")));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Collected"), gdjs.GameNightCode.GDCollectedObjects1);
gdjs.copyArray(runtimeScene.getObjects("DocsRem"), gdjs.GameNightCode.GDDocsRemObjects1);
gdjs.copyArray(runtimeScene.getObjects("Happiness"), gdjs.GameNightCode.GDHappinessObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spent"), gdjs.GameNightCode.GDSpentObjects1);
gdjs.copyArray(runtimeScene.getObjects("Supplies"), gdjs.GameNightCode.GDSuppliesObjects1);
{for(var i = 0, len = gdjs.GameNightCode.GDSuppliesObjects1.length ;i < len;++i) {
    gdjs.GameNightCode.GDSuppliesObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.GameNightCode.GDDocsRemObjects1.length ;i < len;++i) {
    gdjs.GameNightCode.GDDocsRemObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.GameNightCode.GDHappinessObjects1.length ;i < len;++i) {
    gdjs.GameNightCode.GDHappinessObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.GameNightCode.GDCollectedObjects1.length ;i < len;++i) {
    gdjs.GameNightCode.GDCollectedObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Collected"))));
}
}{for(var i = 0, len = gdjs.GameNightCode.GDSpentObjects1.length ;i < len;++i) {
    gdjs.GameNightCode.GDSpentObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Spent"))));
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.GameNightCode.GDOnScreenControlsButtonObjects1);

gdjs.GameNightCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameNightCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameNightCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameNightCode.condition0IsTrue_0.val = true;
        gdjs.GameNightCode.GDOnScreenControlsButtonObjects1[k] = gdjs.GameNightCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.GameNightCode.GDOnScreenControlsButtonObjects1.length = k;}if (gdjs.GameNightCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameDay", false);
}}

}


{


gdjs.GameNightCode.condition0IsTrue_0.val = false;
{
{gdjs.GameNightCode.conditionTrue_1 = gdjs.GameNightCode.condition0IsTrue_0;
gdjs.GameNightCode.condition0IsTrue_1.val = false;
gdjs.GameNightCode.condition1IsTrue_1.val = false;
{
gdjs.GameNightCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 0;
if( gdjs.GameNightCode.condition0IsTrue_1.val ) {
    gdjs.GameNightCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameNightCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 0;
if( gdjs.GameNightCode.condition1IsTrue_1.val ) {
    gdjs.GameNightCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameNightCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


};

gdjs.GameNightCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameNightCode.GDNewSpriteObjects1.length = 0;
gdjs.GameNightCode.GDNewSpriteObjects2.length = 0;
gdjs.GameNightCode.GDNewTextObjects1.length = 0;
gdjs.GameNightCode.GDNewTextObjects2.length = 0;
gdjs.GameNightCode.GDNewText2Objects1.length = 0;
gdjs.GameNightCode.GDNewText2Objects2.length = 0;
gdjs.GameNightCode.GDDocsRemObjects1.length = 0;
gdjs.GameNightCode.GDDocsRemObjects2.length = 0;
gdjs.GameNightCode.GDCollectedObjects1.length = 0;
gdjs.GameNightCode.GDCollectedObjects2.length = 0;
gdjs.GameNightCode.GDSpentObjects1.length = 0;
gdjs.GameNightCode.GDSpentObjects2.length = 0;
gdjs.GameNightCode.GDSuppliesObjects1.length = 0;
gdjs.GameNightCode.GDSuppliesObjects2.length = 0;
gdjs.GameNightCode.GDHappinessObjects1.length = 0;
gdjs.GameNightCode.GDHappinessObjects2.length = 0;
gdjs.GameNightCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.GameNightCode.GDOnScreenControlsButtonObjects2.length = 0;

gdjs.GameNightCode.eventsList0(runtimeScene);

return;

}

gdjs['GameNightCode'] = gdjs.GameNightCode;
