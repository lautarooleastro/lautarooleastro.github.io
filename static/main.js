const loadingScreenElement = document.getElementById('loadingScreen');
const homeScreenElement = document.getElementById('homeScreen');

window.scrollTo(0, 0);

window.addEventListener("load", function() {
  loadingScreenElement.classList.add('fade-out-animation');
  homeScreenElement.classList.add('fade-in-animation');
});

let mybutton = document.getElementById("back-to-top-container");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop >= window.innerHeight ||
    document.documentElement.scrollTop >= window.innerHeight
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var icono = document.getElementById('btn-back-to-top');
var miDiv = document.getElementById('banner');

window.addEventListener('scroll', function() {
  var iconoRect = icono.getBoundingClientRect();
  var miDivRect = miDiv.getBoundingClientRect();

  // Verificar si los elementos se superponen
  if (
    iconoRect.top < miDivRect.bottom &&
    iconoRect.bottom > miDivRect.top
  ) {
    // Cambiar el color del icono cuando se superponen
    icono.classList.remove('text-primary');
    icono.classList.add('text-white');
  } else {
    // Restaurar el color original si no se superponen
    icono.classList.remove('text-white');
    icono.classList.add('text-primary');
  }
});