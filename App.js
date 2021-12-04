// the query selectors
const burger = document.querySelector("div.burger");
const burgerOpen= document.querySelector("i.burger-open");
const burgerClosed = document.querySelector(".burger-close");
const nav = document.querySelector("nav");
    //  console.log(burger.firstElementChild);

//Event listeners
burger.addEventListener("click", toggleMenu);


function toggleMenu(e){
   const burgerElement = burger.firstElementChild;
if(burgerElement.classList.contains("fa-hamburger")){
burgerElement.classList.remove("fa-hamburger");
burgerElement.classList.add("fa-times");
nav.classList.add("nav-toggled");
}
else{
   burgerElement.classList.remove("fa-times");
   burgerElement.classList.add("fa-hamburger");
   nav.classList.remove("nav-toggled");
}

}
//functions
// function burgerTrans(e){
//     //e.preventDefault();
//  burger.classList.toggle("burger-x");
//  nav.classList.toggle("nav-toggled");

// }
// function burgerClose(){
//     const createMenu= document.createElement("div");
//     createMenu.classList.add("burger-close");
//     createMenu.innerHTML ='<i class="fas fa-times"></i>';
// }