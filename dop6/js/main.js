var swiper = new Swiper('.swiper-container', {

  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  /* autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }, */
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
});