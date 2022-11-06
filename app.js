
$(() => {

////buttons with a drop down

        // $(".home").click(function(){
        // $(".home > p").toggle();
//           $(".about > p").css("display", "none");
//           $(".resume > p").css("display", "none");
//           $(".projects > p").css("display", "none");
//     }); 
    //    $(".about").click(function(){
        // $(".about > p").toggle();
//           $(".home > p").css("display", "none");
//           $(".resume > p").css("display", "none");
//           $(".projects > p").css("display", "none");

//    });
//        $(".resume").click(function(){
//        $(".resume > p").toggle();
//          $(".about > p").css("display", "none");
//          $(".home > p").css("display", "none");
//          $(".projects > p").css("display", "none");
//    });
//        $(".projects").click(function(){
//        $(".projects > p").toggle();
//          $(".about > p").css("display", "none");
//          $(".home > p").css("display", "none");
//          $(".resume > p").css("display", "none");
//    });


////footer - mouseover mouseout for links
    $("ul li a").mouseover(function() {
        $(this).css("opacity", "0.3");
    });
     $("ul li a").mouseout(function() {
        $(this).css("opacity", "1");
    });

////Pop up for Contact Information
    $(".open").click(function(){
        $(".popupOverlay").css("visibility", "visible");
        $(".popupContent").css("visibility", "visible");
    });
         $(".close").click(function(){
        $(".popupOverlay").css("visibility", "hidden");
        $(".popupContent").css("visibility", "hidden");
    });

 });



