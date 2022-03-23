// Fonction pour changer la couleur de la navbar quand on scrolle

const navBar = document.querySelector('.navbar');
const logoImg = document.querySelector('#navlogo');
const navText = document.querySelector('.navbar__list');

// Condition de taille d'écran
if (window.matchMedia("(max-width: 800px)").matches) {
  navBar.classList.add('navbarMobile');
  navBar.classList.remove('navbar');
} else {
  navBar.classList.add('navbar');
  navBar.classList.remove('navbarMobile');
};

// Condition de taille d'écran (dès qu'on resize)
window.addEventListener("resize", function() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    navBar.classList.add('navbarMobile');
    navBar.classList.remove('navbar');
  } else {
    navBar.classList.add('navbar');
    navBar.classList.remove('navbarMobile');
  }
})

// Fonction de scrolling, qui s'activera uniquement quand la navbar est en classe navbar
window.onscroll = function() {myScroll()};

function myScroll() {
  if(navBar.classList.value === 'navbar') {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      navBar.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
      logoImg.style.width = "60px";
      navText.style.fontSize = "1.6rem";
      navBar.style.padding = "10px";
    } else {
      navBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
      logoImg.style.width = "100px";
      navText.style.fontSize = "2.2rem";
      navBar.style.padding = "16px";
    }
  }
}
