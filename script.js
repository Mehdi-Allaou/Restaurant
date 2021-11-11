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



// Logiken för att Boka Bord formulär:

let modal = document.getElementById('id01');
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

// Logiken för att hålla året i footer up-to-date:
const date = document.querySelector('.date');
const year = new Date().getFullYear();

date.innerHTML += `&copy; ${year} Copyright`






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
