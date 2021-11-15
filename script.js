const hamMenu = document.querySelector('.navbar-brand');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.overlay-close');

hamMenu.addEventListener('click', () => {
overlay.style.display = 'block';
hamMenu.style.display = 'none';
});

close.addEventListener('click', () => {
overlay.style.display = 'none';
hamMenu.style.display = 'block';
});

overlay.addEventListener('click', () => {
overlay.style.display = 'none';
hamMenu.style.display = 'block';
});



// Logic behind "Boka bord" form:

let modal = document.getElementById('id01');
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

// Logic to keep the year in footer up-to-date:
const date = document.querySelector('.date');
const year = new Date().getFullYear();

date.innerHTML += `&copy; ${year} Copyright`



// Caruosel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}