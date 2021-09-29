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






// close.addEventListener('click', close => {
// close.style.display = (close.style.display === "none" ? "block" : "none")
// });



