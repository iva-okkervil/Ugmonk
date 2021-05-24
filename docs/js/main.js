$(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    navText:['&lt;', '&gt;']
  });
});

new SimpleBar($('#scrollbar')[0]);
