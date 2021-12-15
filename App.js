// the query selectors
const burger = document.querySelector("div.burger");
const burgerOpen= document.querySelector("i.burger-open");
const burgerClosed = document.querySelector(".burger-close");
const nav = document.querySelector("ul.nav-items"); 
const getBound = document.querySelector("body");
const circleContainer = document.querySelector("div.circle-theory");


//Event listeners
burger.addEventListener("click", toggleMenu);
window.addEventListener("scroll", getDeviceHeight)


// This function basically toggles the hamburger menu
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

function getDeviceHeight(){
   //let heightFrom = -getBound.getBoundingClientRect().top;
   // let scrollPercent = (heightFrom/(getBound.getBoundingClientRect().height -window.innerHeight))*100;
   // let value = Math.floor(scrollPercent)
   // console.log(value);
   let totalHeight= Math.floor(getBound.getBoundingClientRect().height);
   console.log(totalHeight);
getBound.style.height = `${totalHeight}px`;
}


var tl1= gsap.timeline ({defaults: {duration: 3, ease: Back.easeOut.config(2),opacity:0 }});
tl1.from("img.landingImage", {opacity:0});
tl1.from("div.backgroundCover", {x:100, delay:1, ease:Power2.easeOut},"-=.5")
tl1.from(".circle-1", {y:-100, delay: 1,}, "-=.5");
tl1.from("div.care", {scale : 2}, "-=1");
tl1.from(".Partner-Us", {opacity: 0, x: -10},"-=1");


const tl = gsap.timeline({repeat:1, repeatDelay:1, yoyo:true});
tl.to("span.catchy-text", {
   duration: 4, 
   text:"at ladi maji foundation we are commited to changing the narattive of widows and children", 
delay: 5
});

 //console.log(window.innerHeight);
// console.log(window.innerWidth); 
// console.log(section1.getBoundingClientRect().top);