//Mobile Menu
const openBtn = document.querySelector(".nav-open");
const menu = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".nav-close");
const navLinks = document.getElementsByClassName("nav-link");

function noScroll() {
  window.scrollTo(0, 0);
}

openBtn.addEventListener("click", () => {
  menu.style.transition = "1s";
  menu.style.height = "300px";
  menu.style.padding = "40px";
  window.addEventListener("scroll", noScroll);
});

closeBtn.addEventListener("click", () => {
  menu.style.transition = "1s";
  menu.style.height = "0px";
  menu.style.padding = "0px";
  setTimeout(() => {
    window.removeEventListener("scroll", noScroll);
  }, 1000);
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    menu.style.transition = "none";
    menu.style.height = "0px";
    menu.style.padding = "0px";
    window.removeEventListener("scroll", noScroll);
  });
}