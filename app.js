const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu);

//show/hide text
function toggle() {
    var x = document.getElementById("showHideText");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }