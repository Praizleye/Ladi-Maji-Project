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

// this guy comes from the contact us page this sucker is the map
// Initialize and add the map

function initMap() {
   // The location of Uluru
   const lmfOffice = { lat: -25.344, lng: 131.036 };
   // The map, centered at Uluru
   const map = new google.maps.Map(document.getElementById("map"), {
     zoom: 4,
     center: lmfOffice,
   });
   // The marker, positioned at Uluru
   const marker = new google.maps.Marker({
     position: lmfOffice,
     map: map,
   });
 }

window.initMap =initMap;


