(()=>{var e=document.querySelector("div.burger"),r=(document.querySelector("i.burger-open"),document.querySelector(".burger-close"),document.querySelector("ul.nav-items"));e.addEventListener("click",(function(s){var a=e.firstElementChild;a.classList.contains("fa-burger")?(a.classList.remove("fa-burger"),a.classList.add("fa-xmark"),r.classList.add("nav-toggled")):(a.classList.remove("fa-xmark"),a.classList.add("fa-burger"),r.classList.remove("nav-toggled"))}))})();