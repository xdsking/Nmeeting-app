/**
 * Created by xuds on 2015/11/12.
 */
$(function () {
    setPosition3();
    $("#nextSteep1").click(function () {
        $(".steepPane1").fadeOut(0);
        $(".steepPane2").fadeIn(500);
    });
    $("#nextSteep2").click(function () {
        $(".steepPane2").fadeOut(0);
        $(".steepPane3").fadeIn(500);
    });
    $("#previousStep1").click(function () {
        //TODO
    });
    $("#previousStep2").click(function () {
        $(".steepPane2").fadeOut(0);
        $(".steepPane1").fadeIn(500);
    });
    $("#previousStep3").click(function () {
        $(".steepPane3").fadeOut(0);
        $(".steepPane2").fadeIn(500);
    });
    $(".cstm-panel-body").css("height", (document.body.clientHeight - 130) + "px");
    /*$(".cstm-glyphicon-add").mouseover(function(){
     $(this).toggleClass("glyphicon-menu-right glyphicon-triangle-right");
     }).mouseout(function(){
     $(this).toggleClass("glyphicon-menu-right glyphicon-triangle-right");
     });
     $(".cstm-glyphicon-remove").mouseover(function(){
     $(this).toggleClass("glyphicon-menu-left glyphicon-triangle-left");
     }).mouseout(function(){
     $(this).toggleClass("glyphicon-menu-left glyphicon-triangle-left");
     });*/
/*    window.onbeforeunload=function(){
        return confirm("确定要离开梦之都网站吗？");
    }*/
});
var setPosition3=function(){
    var position3=parent.position3;
    position3.html("填写会议信息");
    $(window).unload(function(){
        position3.html("");
    });
    $("#nextSteep1,#previousStep3").click(function(){
        position3.html("邀请成员");
    });
    $("#previousStep2").click(function(){
        position3.html("填写会议信息");
    });
    $("#nextSteep2").click(function(){
        position3.html("成功创建");
    });
};