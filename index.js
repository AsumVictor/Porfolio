const menuToggler = document.getElementById('humberger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.getElementById('humberger-close');
const menuLinks = document.querySelectorAll('#mobile-nav li a');

menuToggler.addEventListener('click', () => {
  mobileMenu.classList.add('openMenu');
  document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('openMenu');
  document.body.style.overflow = 'scroll';
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    mobileMenu.classList.remove('openMenu');
    document.body.style.overflow = 'scroll';
  });
});
