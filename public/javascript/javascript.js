// $(".nav a").on("click", function(){
// 	$(".nav").find(".active").removeClass("active");
// 	$(this).parent().addClass("active");
// });

// Disable blog anchor
// $('#blog').removeAttr('href')

// Smooth scroll
// $('a[href*="#"]:not([href="#"])').click(function() {
//   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     if (target.length) {
//       $('html, body').animate({
//         scrollTop: target.offset().top - 80
//       }, 700);
//       return false;
//     }
//   }
// });

// function Scroll(){
// var top = document.getElementById('header');
// var ypos = window.scrollY;
// if(ypos > 400) {
//   top.style.opacity = "0";
// }
// else if(ypos > 200){
//   top.style.opacity = "0.3";
// }
// else if(ypos > 100){
//   top.style.opacity = "0.6";
// }
// else{
//   top.style.opacity = "1";
// }
// }
//   window.addEventListener("scroll",Scroll);

// $('body').scrollspy({ target: '.navbar' })

$(document).ready(function(){
  // Skrollr
  var s = skrollr.init();

  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 120});   

  // Add smooth scrolling on all links inside the navbar
  $('a[href*="#"]:not([href="#"])').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});