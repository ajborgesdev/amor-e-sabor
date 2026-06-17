// ====================
// MENU TOGGLE (MOBILE)
// ====================
const headerMenuToggle = document.querySelector('.header-menu-toggle');
const headerMenus = document.querySelector('.header-menus');

if (headerMenuToggle && headerMenus) {
  headerMenuToggle.addEventListener('click', () => {
    headerMenus.classList.toggle('active');
  });
}

const exploreBtn = document.getElementById('explore-btn');
const sectionCardapio = document.getElementById('menus');

if (exploreBtn && sectionCardapio) {
  exploreBtn.addEventListener('click', () => {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
    const elementPosition =
      sectionCardapio.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight + 80;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}

// ====================
// SCROLL REVEAL
// ====================
ScrollReveal({
  reset: false,
  delay: 300,
  distance: '60px',
  duration: 1500
});

// COMPONENTS
ScrollReveal().reveal('.section-title');
ScrollReveal().reveal('.section-desc');
ScrollReveal().reveal('.section-text');
ScrollReveal().reveal('.subtitle-centos');
ScrollReveal().reveal('.subtitle-salgados');
ScrollReveal().reveal('.carrossel-title', {
  delay: 200,
  duration: 800,
  distance: '20px',
  origin: 'bottom'
});

// SECTION HOME
ScrollReveal().reveal('.section-home-title');
ScrollReveal().reveal('.section-home-img', {
  origin: 'right'
});
ScrollReveal().reveal('.section-home-btns', {
  delay: 600
});

// SECTION MENUS
ScrollReveal().reveal('.cardapio-grid', {
  delay: 500,
  duration: 1000,
  distance: '30px',
  origin: 'bottom'
});
ScrollReveal().reveal('.centos-grid', {
  delay: 500,
  duration: 1000,
  distance: '30px',
  origin: 'bottom'
});
ScrollReveal().reveal('.carrossel-container', {
  delay: 700,
  duration: 1000,
  distance: '30px',
  origin: 'bottom'
});

// SECTION ABOUT
ScrollReveal().reveal('.section-about-img', {
  delay: 900,
  origin: 'left'
});
ScrollReveal().reveal('.section-about-stat', {
  delay: 1200,
  interval: 300
});
ScrollReveal().reveal('.section-about .primery-btn', {
  duration: 3000,
  delay: 1200
});

// SECTION SERVICES
ScrollReveal().reveal('.section-services-card', {
  delay: 1200,
  interval: 300
});

// SECTION CONTACT
ScrollReveal().reveal('.section-contact-info-item', {
  delay: 1200,
  interval: 300
});
ScrollReveal().reveal('.section-contact-form', {
  delay: 1800,
  duration: 3000
});

// ===========
// MENU MOBILE 
// ===========
const menu = document.querySelector('.header-menus');
const botao = document.querySelector('.header-menu-toggle');
const iconMenu = document.querySelector('.bx-menu');
const iconClose = document.querySelector('.bx-x');

menu.classList.remove('active');
menu.style.display = 'none';
iconMenu.style.display = 'inline';
iconClose.style.display = 'none';

function abrirMenu() {
  menu.classList.add('active');
  menu.style.display = 'flex';
  iconMenu.style.display = 'none';
  iconClose.style.display = 'inline';
}

function fecharMenu() {
  menu.classList.remove('active');
  menu.style.display = 'none';
  iconMenu.style.display = 'inline';
  iconClose.style.display = 'none';
}

botao.addEventListener('click', (evento) => {
  evento.stopPropagation();
  if (menu.style.display === 'flex') {
    fecharMenu();
  } else {
    abrirMenu();
  }
});

document.addEventListener('click', (evento) => {
  if (menu.style.display === 'flex') {
    const cliqueNoMenu = menu.contains(evento.target);
    const cliqueNoBotao = botao.contains(evento.target);
    if (!cliqueNoMenu && !cliqueNoBotao) {
      fecharMenu();
    }
  }
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', fecharMenu);
});

// ====================
// INICIALIZAÇÃO DO CARROSSEL SWIPER
// ====================
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    if (typeof Swiper !== 'undefined') {
      const swiperElement = document.querySelector('.mySwiper');
      if (swiperElement) {
        new Swiper('.mySwiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            640: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }
        });
      }
    }
  }, 500);
});
