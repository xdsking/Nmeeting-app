/**
 * Created by xuds on 2015/11/12.
 */
$(function(){
    var iframepage=$("#iframepage");
    var thisLink="addMeeting";
    $(".menu .list-group-item").click(function(){
        if($(this).hasClass("disabled")){
            return;
        }
        $(".menu .list-group-item").removeClass("active");
        $(this).addClass("active");
        changePosition(this);
        if(thisLink!=$(this).attr("link")){
            iframepage.attr("src",$(this).attr("link")+".html");
            thisLink=$(this).attr("link");
        }
    });
    position3=$("#position3");
});
var changePosition=function(listGroupItem){
    var $node=$(listGroupItem);
    $("#position2").html($node.html());
    $("#position1").html($node.parent().parent().prev().html());
};
