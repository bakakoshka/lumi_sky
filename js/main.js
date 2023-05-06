// swiper slider
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      effect: "cards",

      fadeEffect: {
        crossFade: true
      },
    });
// когда пользователь прокрутит вниз от начала экрана 1200 пикселей нужно кнопку показать
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        document.getElementById('mybtn').style.display = "block";
    } else {
        document.getElementById('mybtn').style.display = "none";
    }
}

// нажатие кнопки
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}