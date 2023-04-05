
//   Убираем шапку при скролле
const $header = $("#header")
let prevScroll
let lastShowPos
$(window).on("scroll", function() {
   const scrolled = $(window).scrollTop()
   if (scrolled > 100 && scrolled > prevScroll) {
   $header.addClass("header-out")
   lastShowPos = scrolled
   } else if (scrolled <= Math.max(lastShowPos - 250, 0)) {
   $header.removeClass("header-out")
   }
   prevScroll = scrolled
});
//<--------------------------------------------------------------->
$(document).ready(function() {
   //   Бургер
   $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
      //   Скрывать бургер
      $('.header__menu li').click(function (event) {
         $('.header__burger, .header__menu').removeClass('active');
         $('body').removeClass();
      });
   });
   //   Плавная прокрутка-якорь
   $("#session, #aboutme, #comment, #contacts").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
         event.preventDefault();
            //забираем идентификатор блока с атрибута href
         var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top -50;
            //анимируем переход на расстояние - top за 3000 мс
         $('body,html').animate({scrollTop: top}, 3000);
   });
});
//-----swiper------------------
new Swiper('.comment__slider' , {
   slidesPerView: 2,
   spaceBetween: 0,
   centeredSlides: "true",
   effect: "coverflow",
   grabCursor: "true",
   loop: true,
   coverflowEffect: {
      scale: 0.7,
      stretch: -75,
      modifier: -0.9,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 1,
      },
      767: {
         slidesPerView: 2,
      },
   },
   pagination: {
      el: '.comment__swiper-pagination-bullet',
      clickable: true,
      dynamicBullets: true,
   },
});

