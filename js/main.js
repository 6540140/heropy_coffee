// const searchEl = document.querySelector('.search');
// const searchInputEl = searchEl.querySelector('input');

// searchEl.addEventListener('click', function() {
//   searchInputEl.focus();
// })


// searchInputEl.addEventListener('focus', function() {
//   searchEl.classList.add('focused');
//   searchInputEl.setAttribute('placeholder', '통합검색');
// })


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1) * 0.7,
    opacity: 1
  })
});



const swiper_notice = new Swiper('.notice .swiper', {
  // Optional parameters
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

const swiper_promotion = new Swiper('.promotion .swiper', {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigatoin: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});

const swiper_pagination = new Swiper('.promotion .swiper', {
  autoplay: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  }
})

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click', function() {
  if(promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
})

gsap.to('.floating1', 1.5, {
  delay: 1,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
})

gsap.to('.floating2', 1.5, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
})

gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
})

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5
})

window.addEventListener('scroll', function() {
  console.log(window)
})