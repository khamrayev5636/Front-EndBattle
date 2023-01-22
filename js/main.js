const elBurger = document.querySelector(".header__logo-burger");
const elBurgerTab = document.querySelector(".header__burger")
const elClose = document.querySelector(".header__close");
const elNav = document.querySelector(".header__nav");

elBurger.addEventListener("click" , ()=> {
    elNav.classList.add("header__nav-js")
});

elBurgerTab.addEventListener("click" , ()=> {
    elNav.classList.add("header__nav-js")
});

elClose.addEventListener("click" , ()=> {
    elNav.classList.remove("header__nav-js")
});