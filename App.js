// the query selectors

const burger = document.querySelector("div.burger");
const burgerOpen= document.querySelector("i.burger-open");
const burgerClosed = document.querySelector(".burger-close");
const nav = document.querySelector("ul.nav-items"); 
const getBound = document.querySelector("body");
const circleContainer = document.querySelector("div.circle-theory");
const month = document.querySelector("div.month");
const time = document.querySelector("div.time");
const day = document.querySelector("div.day");
const date = document.querySelector("div.date");
const eventText = document.querySelector("div.someContent");
const prevBtn1 = document.querySelector("div.prev");
const nxtBtn1 = document.querySelector("div.next");
const prevBtn2 = document.querySelector("div.prev2");
const nxtBtn2 = document.querySelector("div.next2");
const tImg = document.querySelector(".tImg");
const tName = document.querySelector(".testifiers-name");
const tText = document.querySelector(".testimony-text");

//Event listeners
burger.addEventListener("click", toggleMenu);
window.addEventListener("scroll", getDeviceHeight)
nxtBtn1.addEventListener("click", nxtBtn1Clicked);
prevBtn1.addEventListener("click", prevBtn1Clicked);
nxtBtn2.addEventListener("click", nxtBtn2Clicked);
prevBtn2.addEventListener("click", prevBtn2Clicked);


// This function basically toggles the hamburger menu
function toggleMenu(e){
   const burgerElement = burger.firstElementChild;
if(burgerElement.classList.contains("fa-hamburger")){
burgerElement.classList.remove("fa-hamburger");
burgerElement.classList.add("fa-times");
nav.classList.add("nav-toggled");
navtimeline();
}
else{
   burgerElement.classList.remove("fa-times");
   burgerElement.classList.add("fa-hamburger");
   nav.classList.remove("nav-toggled");
}

}

function getDeviceHeight(){
   let totalHeight= Math.floor(getBound.getBoundingClientRect().height);
    getBound.style.height = `${totalHeight}px`;

}

//this timeline speifies what we see first the text that animates just right wen u load up the screen
const tl = gsap.timeline({repeat:1, repeatDelay:1, yoyo:true});
tl.to("span.catchy-text", {
   duration: 4, 
   text:"at ladi maji foundation we are commited to changing the narattive of widows and children", 
delay: 5
});

function navtimeline(){
const tl1 = gsap.timeline({defaults:{duration: 2, x:25}});
tl1.from("ul.nav-items li#home", {opacity: 0}, "-=1");
tl1.from("ul.nav-items li#about", {opacity: 0}, "-=1.3");
tl1.from("ul.nav-items li#contact", {opacity: 0}, "-=1.6");
tl1.from("ul.nav-items li#partner", {opacity: 0}, "-=1.9");
}

var tl2= gsap.timeline ({defaults: {duration: 3, ease: Back.easeOut.config(2),opacity:0 }});
tl2.from("img.landingImage", {opacity:0});
tl2.from("div.backgroundCover", {x:100, delay:1, ease:Power2.easeOut},"-=.5")
tl2.from(".circle-1", {y:-100, delay: 1,}, "-=.5");
tl2.from("div.care", {scale : 2}, "-=1");
tl2.from(".Partner-Us", {opacity: 0, x: -10},"-=1");



const upcomingEvents = [
   {
      id: 1,
      month: "NOV",
      time: `7:00 a.m WAT`,
      day: "Sat",
      date: "22",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi rem explicabo ut minima. Modi, hic eveniet doloremque architecto officia sit nulla perspiciatis, quas id maiores sunt facere  eligendi esse iusto"

   },
  {
      id: 2,
   month: "AUG",
   time: `9:00 a.m WAT`,
   day: "Mon",
   date: "22",
   text: "Herro i am number 2, sit amet consectetur adipisicing elit. Eligendi rem explicabo ut minima. Modi, hic eveniet doloremque architecto officia sit nulla perspiciatis, quas id maiores sunt facere  eligendi esse iusto"
},
{ 
   id: 3,
month: "Mar",
time: `1:00 p.m WAT`,
day: "Fri",
date: "2",
text: "Herro i am number 3, sit amet consectetur adipisicing elit. Eligendi rem explicabo ut minima. Modi, hic eveniet doloremque architecto officia sit nulla perspiciatis, quas id maiores sunt facere  eligendi esse iusto"
}
]; 
let currrentItem = 0;

//first covert the first tet to correspond to the add events function just after the page is loaded
// i knw right its quite an ugly hack
month.textContent = "NOV";
time.textContent = "7:00 a.m WAT";
day.textContent = "Sat";
date.textContent =  "22";
eventText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi rem explicabo ut minima. Modi, hic eveniet doloremque architecto officia sit nulla perspiciatis, quas id maiores sunt facere  eligendi esse iusto"

function addEvents(){
   const slideEvents = upcomingEvents[currrentItem];
   month.textContent = slideEvents.month;
   time.textContent =slideEvents.time;
   day.textContent = slideEvents.day;
   date.textContent = slideEvents.date;
   eventText.textContent = slideEvents.text;  
}



const testimonies = [
    { 
   id : 101,
   img: "./Assets/testimonyImage1.jpg",
   tName: "Mrs Kofree Adang" ,
   tText: "LadiMaji has been of tremendous help since the loss of my husband in 2011. Words begin to fail me as i look back in retrospect on how this foundation have been my beneficiaries helping to take care of my basic needs and the needs of my children"
   },
   {
     id : 102,
     img: "./Assets/chika hot (121).jpg",
     tName: "Mrs Geraldine Edoloe" ,
     tText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi rem explicabo ut minima. Modi, hic eveniet doloremque architecto officia sit nulla perspiciatis, quas id maiores sunt facere  eligendi esse iusto,"
   },
  {
     id : 103,
   img:  "./Assets/tImg2.jpg" ,
   tName: "Mrs Chukuwu Ebuka" ,
   tText: "Herro i am number 2, sit amet consectetur adipisicing elit. Eligendi rem explicabo ut minima. Modi, hic eveniet doloremque architecto officia sit nulla perspiciatis, quas id maiores sunt facere  eligendi esse iusto"
},
{ 
   id : 104,
   img:  "./Assets/tImg3.jpg" ,
   tName: "Mrs Adebisi Abraham" ,
   tText: "Herro i am number 3, and all i do is wait for maarh for easter package wait did i just say easter"
}
]; 

// soft Reset coz me as u see me so i no too get energy
tImg.src = "./Assets/testimonyImage1.jpg";
tName.textContent = "Mrs Kofree Adang";
tText.textContent = "LadiMaji has been of tremendous help since the loss of my husband in 2011. Words begin to fail me as i look back in retrospect on how this foundation have been my beneficiaries helping to take care of my basic needs and the needs of my children";

function addTestimony() {
   const slideTestimony = testimonies[currrentItem];
   tImg.src = slideTestimony.img;
   tName.textContent = slideTestimony.tName;
   tText.textContent = slideTestimony.tText;
}



function timer(){
  setInterval(() => {
      currrentItem++;
      if(currrentItem >upcomingEvents.length - 1){
          currrentItem = 0;
      }
      addEvents();
      addTestimony();
   }, 10000);

}  
 timer();

function nxtBtn1Clicked(){
  currrentItem++;
   if(currrentItem > upcomingEvents.length-1){
      currrentItem = 0;
   }   
   addEvents();

}
function prevBtn1Clicked(){
   currrentItem--;   
    if(currrentItem < 0){
       currrentItem = upcomingEvents.length-1;
    }   
    addEvents();
   
 }

 function nxtBtn2Clicked(){
   currrentItem++;
    if(currrentItem > testimonies.length-1){
       currrentItem = 0;
    }  
    addTestimony();
 }
 function prevBtn2Clicked(){
    currrentItem--;   
     if(currrentItem < 0){
        currrentItem = testimonies.length-1;
     }   
     addTestimony();
  }
