$(document).ready(function () {
  $(".im").slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 2000,
   fade: true
 });
});

$('div.button').on('click', function() {
  $(this).fadeOut(1000);
});
