const header = document.querySelectorAll("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.oncliick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open')
};