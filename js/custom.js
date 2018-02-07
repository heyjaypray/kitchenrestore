/*Theme    : narani
 * Author  : Design_mylife
 * Version : V1.1
 * 
 */

//navbar collapse scroll
 $( window ).resize(function() {
    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });
});
//sticky header on scroll
$(window).load(function() {
    $(".sticky").sticky({topSpacing: 0});
    $('#countdown').modal('show');
    
});



//parallax
$(window).stellar({
    horizontalScrolling: false,
    responsive: true/*,
     scrollProperty: 'scroll',
     parallaxElements: false,
     horizontalScrolling: false,
     horizontalOffset: 0,
     verticalOffset: 0*/
});

/*====flex  slider for main slider on header2====*/
 $(window).load(function() {
    $('.flexslider').flexslider({
        directionNav: true, 
        controlNav: false,
        animation: "slide"
    });
  });

//owl carousel for work
$(document).ready(function() {
    $("#work-carousel").owlCarousel({
        // Most important owl features
        items: 4,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 3],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        startDragging: true
    });

});

//owl carousel for testimonials
$(document).ready(function() {

    $("#testi-carousel").owlCarousel({
        // Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: true,
        startDragging: true,
            transitionStyle : "goDown"
    });

});
//owl carousel for full width image slider
$(document).ready(function() {

    $("#full-img-slide").owlCarousel({
        // Most important owl features
        items: 1,
        itemsCustom: false,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        startDragging: true,
        transitionStyle : "goDown"
    });

});

/* ==============================================
 Counter Up
 =============================================== */
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 3000
    });
});


/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */

var wow = new WOW(
        {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 100, // distance to the element when triggering the animation (default is 0)
            mobile: false        // trigger animations on mobile devices (true is default)
        }
);
wow.init();

//portfolio mix
$('#grid').mixitup();


/*========tooltip and popovers====*/
/*==========================*/
$("[data-toggle=popover]").popover();

$("[data-toggle=tooltip]").tooltip();




// Set the date we're counting down to
var countDownDate = new Date("Feb 16, 2018 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdownTimer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 1) {
    clearInterval(x);
    document.getElementById("countdownTimer").innerHTML = "THIS SITE IS NOW EXPIRED";
    $(".hideAfterExpire").hide();
  }
}, 1000);







