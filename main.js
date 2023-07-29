
const hamburgerImg = document.querySelector('.hamburgerImg');
hamburgerImg.addEventListener('click', menuToggled);
function menuToggled () {
    console.log ("menu was toggled")
}
    document.querySelector('.menu-items')
    .classList.toggle('show-menu');