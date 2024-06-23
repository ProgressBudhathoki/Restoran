window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset>= sticky) {
    navbar.style.position="sticky"
    navbar.style.top="0"
  } else {
    navbar.classList.remove("sticky");
  }
}
