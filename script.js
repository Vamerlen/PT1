let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
   loop:true,
});

var year = new Date().getFullYear();

var date = `&copy; Made by Muswamba at Vafadie Pro tech ${year}. All Rights Reserved.`;

document.getElementsByTagName('footer')[0].innerHTML = date;
