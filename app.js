
$(() => {

///// Nav -  mouseover-mouseout for links//// - on index.html
    $(".topnav a").mouseover(function() {
        $(this).css("opacity", "0.3");
    });
    $(".topnav a").mouseout(function() {
        $(this).css("opacity", "1");
    });
    

////footer - mouseover-mouseout for links//// - on index.html
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

    ////buttons with a drop down//// - on the project.html 

    $(".projectOne").click(function(){
        $(".projectOne > p").toggle();
          $(".projectTwo > p").css("display", "none");
          $(".projectThree > p").css("display", "none");
          $(".projectFour > p").css("display", "none");
    }); 
       $(".projectTwo").click(function(){
        $(".projectTwo > p").toggle();
          $(".projectOne > p").css("display", "none");
          $(".projectThree > p").css("display", "none");
          $(".projectFour > p").css("display", "none");

   });
       $(".projectThree").click(function(){
       $(".projectThree > p").toggle();
         $(".projectOne > p").css("display", "none");
         $(".projectTwo > p").css("display", "none");
         $(".projectFour > p").css("display", "none");
   });
       $(".projectFour").click(function(){
       $(".projectFour > p").toggle();
         $(".projectOne > p").css("display", "none");
         $(".projectTwo > p").css("display", "none");
         $(".projectThree > p").css("display", "none");
   });

 });



