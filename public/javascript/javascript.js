// $(".nav a").on("click", function(){
// 	$(".nav").find(".active").removeClass("active");
// 	$(this).parent().addClass("active");
// });

// Disable blog anchor
$('#blog').removeAttr('href')

// Smooth scroll
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 700);
      return false;
    }
  }
});

function Scroll(){
var top = document.getElementById('header');
var ypos = window.scrollY;
if(ypos > 400) {
  top.style.opacity = "0";
}
else if(ypos > 200){
  top.style.opacity = "0.3";
}
else if(ypos > 100){
  top.style.opacity = "0.6";
}
else{
  top.style.opacity = "1";
}
}
  window.addEventListener("scroll",Scroll);

// $('body').scrollspy({ target: '.navbar' })