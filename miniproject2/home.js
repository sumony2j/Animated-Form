$(document).ready(function(){
      $("dt").click(function(){
          $(this).siblings().slideToggle();
          $("dt").not(this).siblings().slideUp();
                });
   });
