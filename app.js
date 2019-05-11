

window.onscroll = function() {
    sticky()
};

var navbar = document.getElementById("navbar");
var topScreen = navbar.offsetTop;
function sticky() {
  if (window.pageYOffset >= topScreen) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


el = document.querySelector('.menu-toggle')
el.addEventListener('click', function() {
    document.querySelector('ul').classList.toggle('opening')
    this.classList.toggle('open')
})

/*
** Animate slider
*/
var slideIndex = 0;
slide();

function slide() {
  var i;
  var x = document.getElementsByClassName("content-slide");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
  } 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(slide, 3500); 
}

/*
** scroll
*/
