// ========== MENÚ HAMBURGUESA ==========
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("nav-open");
});

// ========== CAMBIO DE HEADER AL HACER SCROLL ==========
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
});

// Menú hamburguesa
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('main-nav').classList.toggle('active');
});

// Carrusel de platos populares
new Swiper('.dishes-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.dishes-next',
        prevEl: '.dishes-prev',
    },
    pagination: {
        el: '.dishes-pagination',
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

// Carrusel de instalaciones
new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },
    pagination: {
        el: '.gallery-pagination',
        clickable: true,
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // MENÚ HAMBURGUESA MÓVIL
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
  
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  
    // CARRUSEL SWIPER DE ATRACCIONES (en donde-encontrarnos.html)
    if (typeof Swiper !== 'undefined') {
      new Swiper('.attractions-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.attractions-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.attractions-next',
          prevEl: '.attractions-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      });
    }
  
    // SCROLL SUAVE BOTÓN "VER EN EL MAPA"
    const scrollToMapButton = document.querySelector('.scroll-to-map');
    if (scrollToMapButton) {
      scrollToMapButton.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSelector = scrollToMapButton.getAttribute('href');
        const targetElement = document.querySelector(targetSelector);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
  