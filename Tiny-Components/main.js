// Getting Nodes
function $(el) {
  return document.getElementById(el);
}

let root = $("root");
let toggleBtn = $("toggle");
let footer = $("footer");
let form = $("form");
let navDesk = $("navDesk");
let navLinkContainer = $("navLink-container")
let navSide = $("navSide")
let navSideLink = $("navSide-link")
let navSideOpenBtn = $("navSide-open")
let navSideCloseBtn = $("navSide-close")
let aside = $("aside");
let card = $("card");
let semiDiv = $("semi-div");
let formGroup = $("form-group")
let cookieContainer = $("cookie-container")
let cookieAccept = $("accept")
let cookieDecline = $("decline")
let  dropdown = $("dropdown")




const openNavSide = (e)=>{
  navSide.style.left = "0%"
}
const closeNavSide = (e)=>{
  navSide.style.left = "-100%"
}

navSideOpenBtn.addEventListener("click", openNavSide)
navSideCloseBtn.addEventListener("click", closeNavSide)


cookieAccept.addEventListener("click", closeCookie)
cookieDecline.addEventListener("click", closeCookie)

function closeCookie(){
  cookieContainer.style.bottom = "-100%"
}

toggleBtn.addEventListener("click", toggleDarkMode);

function addAttr(element) {
    element.setAttribute("data-shade", "dark");
}
function rmAttr(element) {
    element.removeAttribute("data-shade");
}

function toggleDarkMode() {
    if (!root.getAttribute("data-shade")) {
    addAttr(root);
    addAttr(footer);
    addAttr(form);
    addAttr(semiDiv);
    addAttr(card);
    addAttr(navDesk);
    addAttr(navSide)
    addAttr(navSideLink)
    addAttr(aside);
    addAttr(formGroup)
    addAttr(navLinkContainer)
    addAttr(dropdown)
  } else {
    rmAttr(root);
    rmAttr(footer);
    rmAttr(form);
    rmAttr(navDesk);
    rmAttr(navSide)
    rmAttr(navSideLink)
    rmAttr(aside);
    rmAttr(card);
    rmAttr(semiDiv);
    rmAttr(formGroup)
    rmAttr(navLinkContainer)
    rmAttr(dropdown)
  }
}
