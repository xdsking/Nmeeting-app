/**
 * Created by xuds on 2015/11/12.
 */
$(function(){
    var iframepage=$("#iframepage");
    var thisLink="addMeeting";
    $(".menu .list-group-item").click(function(){
        $(".menu .list-group-item").removeClass("active");
        $(this).addClass("active");
        if(thisLink!=$(this).attr("link")){
            iframepage.attr("src",$(this).attr("link")+".html");
            thisLink=$(this).attr("link");
        }
    });
});