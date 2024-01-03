const loadingScreenElement = document.getElementById('loadingScreen');
const homeScreenElement = document.getElementById('homeScreen');

window.addEventListener("load", function() {
  loadingScreenElement.classList.add('fade-out-animation');
  homeScreenElement.classList.add('fade-in-animation');
});