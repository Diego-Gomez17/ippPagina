let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let scrollBar = document.querySelector('.scroll-bar');


menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('nav-toggle');
})
window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('nav-toggle');
    scrollIndicator();
}

function scrollIndicator(){

    let maxHeigth = window.document.body.scrollHeigth - window.innerHeight;
    let percentage = ((windows.scrollY) / maxHeigth ) * 100;
    scrollBar.style.width = percentage + '%';

}