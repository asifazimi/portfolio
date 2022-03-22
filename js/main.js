const  menuBtn = document.querySelector('.menu-btn');
const  hamberger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamberger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        menuItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamberger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}