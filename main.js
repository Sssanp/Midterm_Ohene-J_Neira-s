window.onload = function(){
    window.addEventListener('scroll', function (e) {
        if (window.scrollY> 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else{
            document.querySelector("header").classList.remove('is-scrolling');  
        }
    });



const hamburgerIMG = document.querySelector(".hamburgerIMG");
const showMenu = document.querySelector (".show-menu");

hamburgerIMG.addEventListener('click', function (){
    hamburgerIMG.classList.toggle('show-menu');
    showMenu.classList.toggle('show-menu');
});
}
