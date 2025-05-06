window.addEventListener('scroll', function() {
  const header = document.querySelector('.header-area');
  if (window.scrollY > 150) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


 // menu 
var navBtn = document.querySelector('.siteBar-btn');
navBtn.addEventListener('click', function() {
  var navMenu = document.querySelector('.mobile-menu');
  this.classList.toggle('active');
  navMenu.classList.toggle('siteBar');
})


var swiper = new Swiper(".productSwiper", {
loop: true,
slidesPerView: 3,
spaceBetween: 30,
navigation: {
  nextEl: ".button-next",
  prevEl: ".button-prev",
  },
breakpoints: {
  0: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
},
});



var swiper = new Swiper(".solitionSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".sbutton-next",
    prevEl: ".sbutton-prev",
},
});


var swiper = new Swiper(".reviweSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".rbutton-next",
    prevEl: ".rbutton-prev",
},
});



var options = {searchable: false, placeholder: 'What are you looking to buy?', searchtext: 'zoek', selectedtext: 'geselecteerd'};
NiceSelect.bind(document.getElementById("select"), options);
var option = {searchable: false, placeholder: 'Quantity', searchtext: 'zoek', selectedtext: 'geselecteerd'};
NiceSelect.bind(document.getElementById("select-2"), option);

  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

