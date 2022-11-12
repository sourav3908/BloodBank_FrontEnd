$('#myCarousel').carousel({
    interval: 2000,
 })
 /**scroll to top button *******/
 // Get the button:
let mybutton = document.getElementById("myBtn");

// When scrolls down 20px from the top, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// scroll to the top when click
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}