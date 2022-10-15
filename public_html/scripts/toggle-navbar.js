const toggle = document.getElementsByClassName("navbar-toggle");
const banner = document.getElementsByClassName("navbar-banner");
const content = document.getElementsByClassName("navbar-content");

function toggleNavbar() {
  if (toggle[0].classList.contains("navbar-toggle-hide")) {
    showNavbar();
  } else {
    hideNavbar();
  }
}

function hideNavbar() {
  toggle[0].classList.add("navbar-toggle-hide");
  banner[0].classList.add("navbar-banner-hide");
  content[0].classList.add("navbar-content-hide");
}

function showNavbar() {
  toggle[0].classList.remove("navbar-toggle-hide");
  banner[0].classList.remove("navbar-banner-hide");
  content[0].classList.remove("navbar-content-hide");
}
