// $(".nav a").on("click", function(){
// 	$(".nav").find(".active").removeClass("active");
// 	$(this).parent().addClass("active");
// });

// Smooth scroll
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    console.log(target);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 700);
      return false;
    }
  }
});

// $('body').scrollspy({ target: '.navbar' })