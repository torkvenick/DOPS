var mySwiper = new Swiper('.swiper-container', {
 
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})