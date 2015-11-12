/**
 * Created by xuds on 2015/11/12.
 */
$(function(){
    $(".menu .list-group-item").click(function(){
        $(".menu .list-group-item").removeClass("active");
        $(this).addClass("active");
    });
});