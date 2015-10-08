/**
 * Created by xuds on 2015/9/14.
 */
$(function () {
    var flag = true, menuPlus = $("#menuPlus");
    $("#menuBar").click(function (evt) {
        if (flag) {
            //$(this).attr("data-icon", "cstm-menu1");
            menuPlus.css("display", "block");
            flag = false;
        }
        else {
            //$(this).attr("data-icon", "cstm-menu");
            menuPlus.css("display", "none");
            flag = true;
        }
        evt.stopPropagation();
    });
    var chatBoxHeight = document.body.clientWidth - 160 + "px";
    $("#chatBox").css("width", chatBoxHeight);
    $(window).resize(function () {
        var chatBoxHeight = document.body.clientWidth - 160 + "px";
        $("#chatBox").css("width", chatBoxHeight);
    });
    initSoundContorl();
    initHomeContentSize();
    initRoomNamePosition();
    initOptionEvent();
});
var initSoundContorl = function () {
    var flag = true;
    $("#soundContorl").click(function () {
        if (flag) {
            $(this).attr("src", "images/mute.png");
            flag = false;
        } else {
            $(this).attr("src", "images/sound.png");
            flag = true;
        }
    });
};
var initHomeContentSize = function () {
    var contentHeight = document.body.clientHeight - 67 + "px";
    $(".home-content").css("height", contentHeight);
    $(window).resize(function () {
        var contentHeight = document.body.clientHeight - 67 + "px";
        $(".home-content").css("height", contentHeight);
    });
};
var initRoomNamePosition=function(){
    var roomName=document.body.clientHeight-235+"px";
    $(".home-content div:first").css("margin-top",roomName);
};
//初始化事件
var initOptionEvent=function(){
    var chartFlag=false;
    $("#switchChartState").change(function(){
        if(this.value=="on"){
            $("#chartPane").css("display","block");
            chartFlag=true;
        }else{

            $("#chartPane").css("display","none");
            chartFlag=false;
        }
    });
};