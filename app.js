
$(() => {

///// Nav -  mouseover mouseout for links//// - on index.html
    $(".topnav a").mouseover(function() {
        $(this).css("opacity", "0.3");
    });
    $(".topnav a").mouseout(function() {
        $(this).css("opacity", "1");
    });
    

////footer - mouseover mouseout for links//// - on index.html
    $("ul li a").mouseover(function() {
        $(this).css("opacity", "0.3");
    });
     $("ul li a").mouseout(function() {
        $(this).css("opacity", "1");
    });


////Pop up for Contact Information//// -on index.html
    $(".open").click(function(){
        $(".popupOverlay").css("visibility", "visible");
        $(".popupContent").css("visibility", "visible");
    });
         $(".close").click(function(){
        $(".popupOverlay").css("visibility", "hidden");
        $(".popupContent").css("visibility", "hidden");
    });

 });



