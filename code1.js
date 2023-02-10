gdjs.GameDayCode = {};
gdjs.GameDayCode.GDNewSpriteObjects1= [];
gdjs.GameDayCode.GDNewSpriteObjects2= [];
gdjs.GameDayCode.GDPenObjects1= [];
gdjs.GameDayCode.GDPenObjects2= [];
gdjs.GameDayCode.GDNewSprite2Objects1= [];
gdjs.GameDayCode.GDNewSprite2Objects2= [];
gdjs.GameDayCode.GDOnScreenControlsButtonObjects1= [];
gdjs.GameDayCode.GDOnScreenControlsButtonObjects2= [];
gdjs.GameDayCode.GDNewTextObjects1= [];
gdjs.GameDayCode.GDNewTextObjects2= [];
gdjs.GameDayCode.GDDocsRemObjects1= [];
gdjs.GameDayCode.GDDocsRemObjects2= [];
gdjs.GameDayCode.GDSuppliesObjects1= [];
gdjs.GameDayCode.GDSuppliesObjects2= [];
gdjs.GameDayCode.GDDayNoObjects1= [];
gdjs.GameDayCode.GDDayNoObjects2= [];
gdjs.GameDayCode.GDHappinessObjects1= [];
gdjs.GameDayCode.GDHappinessObjects2= [];

gdjs.GameDayCode.conditionTrue_0 = {val:false};
gdjs.GameDayCode.condition0IsTrue_0 = {val:false};
gdjs.GameDayCode.condition1IsTrue_0 = {val:false};
gdjs.GameDayCode.condition2IsTrue_0 = {val:false};
gdjs.GameDayCode.condition3IsTrue_0 = {val:false};
gdjs.GameDayCode.conditionTrue_1 = {val:false};
gdjs.GameDayCode.condition0IsTrue_1 = {val:false};
gdjs.GameDayCode.condition1IsTrue_1 = {val:false};
gdjs.GameDayCode.condition2IsTrue_1 = {val:false};
gdjs.GameDayCode.condition3IsTrue_1 = {val:false};


gdjs.GameDayCode.mapOfGDgdjs_46GameDayCode_46GDOnScreenControlsButtonObjects1Objects = Hashtable.newFrom({"OnScreenControlsButton": gdjs.GameDayCode.GDOnScreenControlsButtonObjects1});
gdjs.GameDayCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.GameDayCode.GDOnScreenControlsButtonObjects1);

gdjs.GameDayCode.condition0IsTrue_0.val = false;
{
gdjs.GameDayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameDayCode.mapOfGDgdjs_46GameDayCode_46GDOnScreenControlsButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameDayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameDayCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GameDayCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDNewSpriteObjects1[i].setPosition(gdjs.evtTools.common.lerp((gdjs.GameDayCode.GDNewSpriteObjects1[i].getPointX("")), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 20, 0.25),gdjs.evtTools.common.lerp((gdjs.GameDayCode.GDNewSpriteObjects1[i].getPointY("")), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - 496, 0.25));
}
}{for(var i = 0, len = gdjs.GameDayCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDNewSpriteObjects1[i].setAnimationName("Up");
}
}}

}


};gdjs.GameDayCode.mapOfGDgdjs_46GameDayCode_46GDOnScreenControlsButtonObjects1Objects = Hashtable.newFrom({"OnScreenControlsButton": gdjs.GameDayCode.GDOnScreenControlsButtonObjects1});
gdjs.GameDayCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.GameDayCode.GDOnScreenControlsButtonObjects1);

gdjs.GameDayCode.condition0IsTrue_0.val = false;
{
gdjs.GameDayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameDayCode.mapOfGDgdjs_46GameDayCode_46GDOnScreenControlsButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.GameDayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameDayCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pen"), gdjs.GameDayCode.GDPenObjects1);
{for(var i = 0, len = gdjs.GameDayCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDNewSpriteObjects1[i].setPosition(gdjs.evtTools.common.lerp((gdjs.GameDayCode.GDNewSpriteObjects1[i].getPointX("")), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 20, 0.05),gdjs.evtTools.common.lerp((gdjs.GameDayCode.GDNewSpriteObjects1[i].getPointY("")), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - 496, 0.05));
}
}{for(var i = 0, len = gdjs.GameDayCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDNewSpriteObjects1[i].setAnimationName("Down");
}
}{for(var i = 0, len = gdjs.GameDayCode.GDPenObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDPenObjects1[i].drawRectangle((( gdjs.GameDayCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.GameDayCode.GDNewSpriteObjects1[0].getPointX("")) + 19.5, (( gdjs.GameDayCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.GameDayCode.GDNewSpriteObjects1[0].getPointY("")) + 491.5, (( gdjs.GameDayCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.GameDayCode.GDNewSpriteObjects1[0].getPointX("")) + 20.5, (( gdjs.GameDayCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.GameDayCode.GDNewSpriteObjects1[0].getPointY("")) + 492.5);
}
}}

}


};gdjs.GameDayCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameDayCode.condition0IsTrue_0.val = false;
{
gdjs.GameDayCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.GameDayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameDayCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameDayCode.condition0IsTrue_0.val = false;
{
gdjs.GameDayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameDayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameDayCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.GameDayCode.condition0IsTrue_0.val = false;
{
gdjs.GameDayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
}if (gdjs.GameDayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


gdjs.GameDayCode.condition0IsTrue_0.val = false;
{
gdjs.GameDayCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(true);
}if (gdjs.GameDayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pen"), gdjs.GameDayCode.GDPenObjects1);
{for(var i = 0, len = gdjs.GameDayCode.GDPenObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDPenObjects1[i].getBehavior("Tween").addObjectPositionYTween("A", -(2000), "easeInOutQuad", 10000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.GameDayCode.GDOnScreenControlsButtonObjects1);

gdjs.GameDayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameDayCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameDayCode.GDOnScreenControlsButtonObjects1[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameDayCode.condition0IsTrue_0.val = true;
        gdjs.GameDayCode.GDOnScreenControlsButtonObjects1[k] = gdjs.GameDayCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.GameDayCode.GDOnScreenControlsButtonObjects1.length = k;}if (gdjs.GameDayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DayNo"), gdjs.GameDayCode.GDDayNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("DocsRem"), gdjs.GameDayCode.GDDocsRemObjects1);
gdjs.copyArray(runtimeScene.getObjects("Happiness"), gdjs.GameDayCode.GDHappinessObjects1);
gdjs.copyArray(runtimeScene.getObjects("Supplies"), gdjs.GameDayCode.GDSuppliesObjects1);
{for(var i = 0, len = gdjs.GameDayCode.GDDocsRemObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDDocsRemObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameDayCode.GDSuppliesObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDSuppliesObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.GameDayCode.GDDayNoObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDDayNoObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.GameDayCode.GDHappinessObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDHappinessObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.GameDayCode.GDOnScreenControlsButtonObjects1);

gdjs.GameDayCode.condition0IsTrue_0.val = false;
gdjs.GameDayCode.condition1IsTrue_0.val = false;
{
gdjs.GameDayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameDayCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameDayCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( !(gdjs.GameDayCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameDayCode.condition1IsTrue_0.val = true;
        gdjs.GameDayCode.GDOnScreenControlsButtonObjects1[k] = gdjs.GameDayCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.GameDayCode.GDOnScreenControlsButtonObjects1.length = k;}}
if (gdjs.GameDayCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameDayCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pen"), gdjs.GameDayCode.GDPenObjects1);
{for(var i = 0, len = gdjs.GameDayCode.GDPenObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDPenObjects1[i].getBehavior("Tween").addObjectPositionYTween("Switch", -(720), "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.GameDayCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDNewSprite2Objects1[i].getBehavior("Tween").addObjectPositionYTween("SwitchPaper", -(1228), "easeInOutQuad", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.GameDayCode.GDOnScreenControlsButtonObjects1);

gdjs.GameDayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameDayCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameDayCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameDayCode.condition0IsTrue_0.val = true;
        gdjs.GameDayCode.GDOnScreenControlsButtonObjects1[k] = gdjs.GameDayCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.GameDayCode.GDOnScreenControlsButtonObjects1.length = k;}if (gdjs.GameDayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameDayCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pen"), gdjs.GameDayCode.GDPenObjects1);
{for(var i = 0, len = gdjs.GameDayCode.GDPenObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDPenObjects1[i].getBehavior("Tween").addObjectPositionYTween("SwitchG", -(720), "easeInOutQuad", 1000, false);
}
}{for(var i = 0, len = gdjs.GameDayCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDNewSprite2Objects1[i].getBehavior("Tween").addObjectPositionYTween("", -(1228), "easeInOutQuad", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pen"), gdjs.GameDayCode.GDPenObjects1);

gdjs.GameDayCode.condition0IsTrue_0.val = false;
gdjs.GameDayCode.condition1IsTrue_0.val = false;
gdjs.GameDayCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameDayCode.GDPenObjects1.length;i<l;++i) {
    if ( gdjs.GameDayCode.GDPenObjects1[i].getBehavior("Tween").hasFinished("Switch") ) {
        gdjs.GameDayCode.condition0IsTrue_0.val = true;
        gdjs.GameDayCode.GDPenObjects1[k] = gdjs.GameDayCode.GDPenObjects1[i];
        ++k;
    }
}
gdjs.GameDayCode.GDPenObjects1.length = k;}if ( gdjs.GameDayCode.condition0IsTrue_0.val ) {
{
gdjs.GameDayCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 0;
}if ( gdjs.GameDayCode.condition1IsTrue_0.val ) {
{
{gdjs.GameDayCode.conditionTrue_1 = gdjs.GameDayCode.condition2IsTrue_0;
gdjs.GameDayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8741884);
}
}}
}
if (gdjs.GameDayCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameDayCode.GDNewSprite2Objects1);
/* Reuse gdjs.GameDayCode.GDPenObjects1 */
{for(var i = 0, len = gdjs.GameDayCode.GDPenObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDPenObjects1[i].setClearBetweenFrames(true);
}
}{for(var i = 0, len = gdjs.GameDayCode.GDPenObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDPenObjects1[i].setY(0);
}
}{for(var i = 0, len = gdjs.GameDayCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDNewSprite2Objects1[i].getBehavior("Tween").addObjectPositionYTween("Back", -(500), "easeInOutQuad", 1000, false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).sub(gdjs.randomInRange(9, 21));
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(gdjs.randomInRange(10, 31));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pen"), gdjs.GameDayCode.GDPenObjects1);

gdjs.GameDayCode.condition0IsTrue_0.val = false;
gdjs.GameDayCode.condition1IsTrue_0.val = false;
gdjs.GameDayCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameDayCode.GDPenObjects1.length;i<l;++i) {
    if ( gdjs.GameDayCode.GDPenObjects1[i].getBehavior("Tween").hasFinished("SwitchG") ) {
        gdjs.GameDayCode.condition0IsTrue_0.val = true;
        gdjs.GameDayCode.GDPenObjects1[k] = gdjs.GameDayCode.GDPenObjects1[i];
        ++k;
    }
}
gdjs.GameDayCode.GDPenObjects1.length = k;}if ( gdjs.GameDayCode.condition0IsTrue_0.val ) {
{
gdjs.GameDayCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 0;
}if ( gdjs.GameDayCode.condition1IsTrue_0.val ) {
{
{gdjs.GameDayCode.conditionTrue_1 = gdjs.GameDayCode.condition2IsTrue_0;
gdjs.GameDayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8744676);
}
}}
}
if (gdjs.GameDayCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameDayCode.GDNewSprite2Objects1);
/* Reuse gdjs.GameDayCode.GDPenObjects1 */
{for(var i = 0, len = gdjs.GameDayCode.GDPenObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDPenObjects1[i].setClearBetweenFrames(true);
}
}{for(var i = 0, len = gdjs.GameDayCode.GDPenObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDPenObjects1[i].setY(0);
}
}{for(var i = 0, len = gdjs.GameDayCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDNewSprite2Objects1[i].getBehavior("Tween").addObjectPositionYTween("Back", -(500), "easeInOutQuad", 1000, false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(gdjs.randomInRange(4, 13));
}}

}


{


gdjs.GameDayCode.condition0IsTrue_0.val = false;
gdjs.GameDayCode.condition1IsTrue_0.val = false;
{
gdjs.GameDayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameDayCode.condition0IsTrue_0.val ) {
{
{gdjs.GameDayCode.conditionTrue_1 = gdjs.GameDayCode.condition1IsTrue_0;
gdjs.GameDayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8744244);
}
}}
if (gdjs.GameDayCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameNight", false);
}}

}


{


gdjs.GameDayCode.condition0IsTrue_0.val = false;
{
{gdjs.GameDayCode.conditionTrue_1 = gdjs.GameDayCode.condition0IsTrue_0;
gdjs.GameDayCode.condition0IsTrue_1.val = false;
gdjs.GameDayCode.condition1IsTrue_1.val = false;
{
gdjs.GameDayCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 0;
if( gdjs.GameDayCode.condition0IsTrue_1.val ) {
    gdjs.GameDayCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameDayCode.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 0;
if( gdjs.GameDayCode.condition1IsTrue_1.val ) {
    gdjs.GameDayCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameDayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameDayCode.GDNewSprite2Objects1);

gdjs.GameDayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameDayCode.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs.GameDayCode.GDNewSprite2Objects1[i].getBehavior("Tween").hasFinished("Back") ) {
        gdjs.GameDayCode.condition0IsTrue_0.val = true;
        gdjs.GameDayCode.GDNewSprite2Objects1[k] = gdjs.GameDayCode.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs.GameDayCode.GDNewSprite2Objects1.length = k;}if (gdjs.GameDayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Pen"), gdjs.GameDayCode.GDPenObjects1);
{for(var i = 0, len = gdjs.GameDayCode.GDPenObjects1.length ;i < len;++i) {
    gdjs.GameDayCode.GDPenObjects1[i].setClearBetweenFrames(false);
}
}}

}


};

gdjs.GameDayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameDayCode.GDNewSpriteObjects1.length = 0;
gdjs.GameDayCode.GDNewSpriteObjects2.length = 0;
gdjs.GameDayCode.GDPenObjects1.length = 0;
gdjs.GameDayCode.GDPenObjects2.length = 0;
gdjs.GameDayCode.GDNewSprite2Objects1.length = 0;
gdjs.GameDayCode.GDNewSprite2Objects2.length = 0;
gdjs.GameDayCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.GameDayCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.GameDayCode.GDNewTextObjects1.length = 0;
gdjs.GameDayCode.GDNewTextObjects2.length = 0;
gdjs.GameDayCode.GDDocsRemObjects1.length = 0;
gdjs.GameDayCode.GDDocsRemObjects2.length = 0;
gdjs.GameDayCode.GDSuppliesObjects1.length = 0;
gdjs.GameDayCode.GDSuppliesObjects2.length = 0;
gdjs.GameDayCode.GDDayNoObjects1.length = 0;
gdjs.GameDayCode.GDDayNoObjects2.length = 0;
gdjs.GameDayCode.GDHappinessObjects1.length = 0;
gdjs.GameDayCode.GDHappinessObjects2.length = 0;

gdjs.GameDayCode.eventsList2(runtimeScene);

return;

}

gdjs['GameDayCode'] = gdjs.GameDayCode;
