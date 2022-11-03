
$(() => {

        $(".home").click(function(){
        $(".home > p").toggle();
          $(".about > p").css("display", "none");
          $(".resume > p").css("display", "none");
          $(".projects > p").css("display", "none");
    }); 
       $(".about").click(function(){
        $(".about > p").toggle();
          $(".home > p").css("display", "none");
          $(".resume > p").css("display", "none");
          $(".projects > p").css("display", "none");

   });
       $(".resume").click(function(){
       $(".resume > p").toggle();
         $(".about > p").css("display", "none");
         $(".home > p").css("display", "none");
         $(".projects > p").css("display", "none");
   });
       $(".projects").click(function(){
       $(".projects > p").toggle();
         $(".about > p").css("display", "none");
         $(".home > p").css("display", "none");
         $(".resume > p").css("display", "none");
   });
 });



