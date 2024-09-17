
var owl = $('.owl-carousel2');
owl.owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
    }
});



$(document).ready(function(){
    var owl = $(".margin");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 100,
    autoplay: true,
    autoplayTimeout: 1100,
    autoplayHoverPause: true,
    responsiveClass: true,
  });
  });

$(document).ready(function(){
    var owl = $(".margin2");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 200,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsiveClass: true,
  });
  });