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

var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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



// close.addEventListener('click', close => {
// close.style.display = (close.style.display === "none" ? "block" : "none")
// });


// <script type="text/javascript">
//     let locations = [['Restaurang Spice', 59.329094, 18.099431]];

//     let map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 14,
//       center: new google.maps.LatLng(59.329094, 18.099431),
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     });

//     let infowindow = new google.maps.InfoWindow();

//     let marker, i;

//     for (i = 0; i < locations.length; i++) {  
//       marker = new google.maps.Marker({
//         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//         map: map
//       });

//       google.maps.event.addListener(marker, 'click', (function(marker, i) {
//         return function() {
//           infowindow.setContent(locations[i][0]);
//           infowindow.open(map, marker);
//         }
//       })(marker, i));
//     }
//   </script>
