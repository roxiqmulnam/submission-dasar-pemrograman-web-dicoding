// slider 
var sliderMain = document.getElementById('slider-main')
var item = sliderMain.getElementsByClassName('items')
function next() {
    sliderMain.append(item[0]);
}
function prev() {
    sliderMain.prepend(item[item.length - 1]);
}

// navbar 
var myNav = document.getElementById('navbar');
window.onscroll = function () { 
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

const mobileMenu = document.querySelector(".btn-mobile-navbar");
const linkNavbar = document.querySelector(".mobile-navbar");

mobileMenu.addEventListener("click", function () {
  linkNavbar.classList.toggle("open");
});
linkNavbar.addEventListener("click", function () {
  linkNavbar.classList.remove("open");
});