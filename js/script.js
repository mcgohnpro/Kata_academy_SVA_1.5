let swiper;

const swiperParameters = {
  direction: 'horizontal',
  loop: false,
  effect: 'slide',
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
      el: '.swiper-pagination',
    },
}

function initSwiper () {
  if  (breakPoint.matches) {
    swiper = new Swiper('.swiper', swiperParameters)
  } else {
    if (swiper !== undefined) {
      swiper.destroy(true, true);
    }
  return;
  }
}

const breakPoint = window.matchMedia('(max-width: 767px)');
breakPoint.addEventListener('change', initSwiper);

initSwiper();

let swiperElement = document.querySelector('.swiper');
let seeMoreButton = document.querySelector('.brends__view-all-button');
let seeMoreDecore = document.querySelector('.view-all-button__decore');

seeMoreButton.addEventListener('click', function() {
  if (!swiperElement.classList.contains('brends__swiper--expanded')) {
    swiperElement.classList.add('brends__swiper--expanded');
    seeMoreButton.children[1].textContent  = 'Скрыть';
    seeMoreDecore.classList.add('view-all-button__decore--opened');
  } else {
    swiperElement.classList.remove('brends__swiper--expanded');
    seeMoreDecore.classList.remove('view-all-button__decore--opened');
    seeMoreButton.children[1].textContent  = 'Показать все';
  }
})



