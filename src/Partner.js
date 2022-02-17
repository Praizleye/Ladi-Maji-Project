const burger = document.querySelector("div.burger");
const burgerOpen= document.querySelector("i.burger-open");
const burgerClosed = document.querySelector(".burger-close");
const nav = document.querySelector("ul.nav-items");


burger.addEventListener("click", toggleMenu);

// This function basically toggles the hamburger menu
function toggleMenu(e){
    const burgerElement = burger.firstElementChild;
 if(burgerElement.classList.contains("fa-burger")){
 burgerElement.classList.remove("fa-burger");
 burgerElement.classList.add("fa-xmark");
 nav.classList.add("nav-toggled");
 }
 else{
    burgerElement.classList.remove("fa-xmark");
    burgerElement.classList.add("fa-burger");
    nav.classList.remove("nav-toggled");
 }
 
 }