// call the html selectors
const menuToggler = document.getElementById('humberger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.getElementById('humberger-close');
const menuLinks = document.querySelectorAll('#mobile-nav li a');

// Add event-listener tot the hamburger
menuToggler.addEventListener('click', () => {
  mobileMenu.classList.add('openMenu');
  document.body.style.overflow = 'hidden';
});

// Close event=listener
menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('openMenu');
  document.body.style.overflow = 'scroll';
});

// Link each section of the paage
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    mobileMenu.classList.remove('openMenu');
    document.body.style.overflow = 'scroll';
  });
});
