// Variables
const hamburgerMenu = document.querySelector('#js-menu_btn');
let menuOpen = false;

const nav = document.querySelector('#js-nav');
const navLinks = document.querySelector('#js-links');
const body = document.querySelector('body');
const accordions = document.querySelectorAll('.section-info');

// Color
const colors = ['#fff', '#000'];

// Media Query
const largeScreen = window.matchMedia('(min-width: 1024px)');

// Reusable function
const display = (element, style) => {
  element.style.display = style;
};
const animate = (element, style) => {
  element.style.animation = style;
};
const overflow = (element, style) => {
  element.style.overflow = style;
};
const color = (element, style) => {
  element.style.color = style;
};
const border = (element, style) => {
  element.style.borderLeft = style;
};
const addClass = (element, classOne, classTwo, classThree) => {
  element.classList.add(classOne, classTwo, classThree);
};
const removeClass = (element, classOne) => {
  element.classList.remove(classOne);
};

// Function - Menu
const toggleMenu = () => {
  nav.classList.toggle('show');

  if (nav.className === 'show') {
    display(nav, 'block');
    animate(nav, 'slideDown 0.9s ease-in-out forwards');
    overflow(body, 'hidden');

    hamburgerMenu.classList.add('open');
    menuOpen = true;
  } else {
    animate(nav, 'slideUp 0.4s ease-in-out forwards');
    overflow(body, 'auto');

    hamburgerMenu.classList.remove('open');
    menuOpen = false;
  }
};

// Accordion - Show/Hide
accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
  });
});

// Intro Animation
const introHeading = document.querySelector('.intro-content img');
const introLine = document.querySelector('.intro-name hr');

if (largeScreen.matches) {
  addClass(introHeading, 'animate__animated', 'animate__rollIn');
  addClass(introLine, 'animate__animated', 'animate__fadeInLeft');
}

// Page Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  easing: 'easeInOutQuint',
});

// Change navbar background color
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const links = document.querySelectorAll('.lg-navbar a');
const logo = document.querySelector('.logo');

const observerOptions = {
  rootMargin: '-65px 0px 0px 0px',
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      addClass(header, 'nav-scrolled');
      links.forEach(link => {
        color(link, colors[0]);
      });
      border(logo, '2px solid white');
      color(logo, colors[0]);
    } else {
      removeClass(header, 'nav-scrolled');
      addClass(header, 'nav-scrolled-top');
      links.forEach(link => {
        color(link, colors[1]);
      });
      border(logo, '');
      color(logo, '');
    }
  });
}, observerOptions);

observer.observe(intro);

// Scroll Animation
const scrollAnimation = () => {
  const cards = document.querySelectorAll('.card');
  const profileImg = document.querySelector('.about__profile-img');
  const programmingLogo = document.querySelector('.programming');

  const positionTop = document.documentElement.scrollTop;

  cards.forEach(card => {
    // Portfolio Section
    if (positionTop >= 200 && largeScreen.matches) {
      addClass(
        card,
        'animate__animated',
        'animate__fadeInRightBig',
        'animate__slow'
      );
      addClass(
        programmingLogo,
        'animate__animated',
        'animate__fadeInLeftBig',
        'animate__slow'
      );
    }
  });

  // About Section
  if (positionTop >= 2130 && largeScreen.matches) {
    addClass(profileImg, 'animate__animated', 'animate__rollIn');
  }
};

// Date Object

const date = new Date();
const fullYear = date.getFullYear();

const setYear = document.querySelector('.setYear');
setYear.innerHTML = fullYear;

// Event Listener
hamburgerMenu.addEventListener('click', toggleMenu);
navLinks.addEventListener('click', toggleMenu);
window.addEventListener('scroll', scrollAnimation);
