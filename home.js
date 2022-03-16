// Fonction pour changer la couleur de la navbar quand on scrolle

const navBar = document.querySelector('nav');

window.onscroll = function() {myScroll()};

function myScroll() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navBar.style.backgroundColor = "black";
  } else {
    navBar.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
}


