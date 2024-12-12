const menu = document.querySelector(".site-header__menu");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

function menuAppear() {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("open");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", menuAppear);
