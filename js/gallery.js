$(document).ready(function(){
    $(".thumbnail img").click(function(){
        var x=$(this).attr("src");
    	$(".gallery-image").attr("src",x);
        $(this).attr("data-toggle","modal");
        $(this).attr("data-target","#myModal");
    });
});