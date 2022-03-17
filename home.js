// Fonction pour changer la couleur de la navbar quand on scrolle

const navBar = document.querySelector('nav');
const logoImg = document.querySelector('#navlogo');

window.onscroll = function() {myScroll()};

function myScroll() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navBar.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    logoImg.style.width = "60px";
  } else {
    navBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
    logoImg.style.width = "100px";
  }
}


