
$(document).ready(function() {
    // The speed of the scroll in milliseconds
    var speed = 1000;
    console.log("hola");
    // Find links that are #anchors and scroll to them
    // $('a[href*="#"]:not([href="#"])')
    //   .unbind('click.smoothScroll')
    //   .bind('click.smoothScroll', function(event) {
        
    //     //event.preventDefault();
    //     var exis =  $(this).attr('href');
    //     console.log(exis);
    //     //alert("jfjdjhnksd");
    //     //$("html, body").animate({ scrollTop: "300px" });

    
    //$('html, body').animate({ scrollTop: $( $(this).attr('href') ).offset() }, speed);

     // });

    $('a').click(function(){
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, speed);
      return false;
    });

  });



