// call the html selectors
const menuToggler = document.getElementById('humberger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.getElementById('humberger-close');
const menuLinks = document.querySelectorAll('#mobile-nav li a');
const projectsContainer = document.querySelector('.project-container');

// List of Project Data
const projectData = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: '',
    featuredImage: '',
    technologies: ['Ruby on Rail', 'HTML', 'CSS', 'JavaScript'],
    linkToLive: '',
    linkToSource: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: '',
    featuredImage: '',
    technologies: ['Ruby on Rail', 'HTML', 'CSS', 'JavaScript'],
    linkToLive: '',
    linkToSource: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: '',
    featuredImage: '',
    technologies: ['Ruby on Rail', 'HTML', 'CSS', 'JavaScript'],
    linkToLive: '',
    linkToSource: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: '',
    featuredImage: '',
    technologies: ['Ruby on Rail', 'HTML', 'CSS', 'JavaScript'],
    linkToLive: '',
    linkToSource: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: '',
    featuredImage: '',
    technologies: ['Ruby on Rail', 'HTML', 'CSS', 'JavaScript'],
    linkToLive: '',
    linkToSource: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: '',
    featuredImage: '',
    technologies: ['Ruby on Rail', 'HTML', 'CSS', 'JavaScript'],
    linkToLive: '',
    linkToSource: '',
  },
];

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

// To Display Projects
document.addEventListener('DOMContentLoaded', () => {
  projectData.forEach((project) => {
    const projectContent = `
    <div class="card-content">
      <h4 class="project-title text-primary text-center">${project.name}</h4>
      <ul class="tag-language-container list-style-none ">
      ${project.technologies.map(
    (tech) => `<li class="tag-language">${tech}</li>`,
  ).join('')}
     </ul>
     <button type='button' class="project-action">See project</button>
    </div>
    <div class="image-placeholder"></div>
    `;

    const projectwrap = document.createElement('li');
    projectwrap.setAttribute('class', 'card');
    projectwrap.innerHTML = projectContent;
    projectsContainer.appendChild(projectwrap);
  });
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-action')) {
    const modalBox = document.createElement('div');
    modalBox.setAttribute('class', 'project-modal-box show');
    const modalContent = `
    <div class="modal">
        <div id="modal-close">
          &times
        </div>
        <img src="./images/Snapshoot Portfolio.png" alt="project image">
        <div class="title">
          <h3>Keeping track of hundreds of components</h3>
          <ul>
            <li> <button type="button">See live <i class="fa-solid fa-arrow-up-right-from-square"></i></i></button></li>
            <li><button type="button">See source <i class="fa fa-github"></i> </button></li>
          </ul>
        </div>
        <ul class="tag-language-container-modal list-style-none ">
          <li class="tag-language-modal">Ruby on Rail</li>
          <li class="tag-language-modal">CSS</li>
          <li class="tag-language-modal">JavaScript</li>
        </ul>
        <p  >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
        <p  class="hide-desktop">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
        <ul class="linksButtons">
          <li> <button type="button">See live <i class="fa-solid fa-arrow-up-right-from-square"></i></i> </button></li>
          <li><button type="button">See source <i class="fa fa-github"></i> </button></li>
        </ul>
      </div>
    `;
    modalBox.innerHTML = modalContent;
    projectsContainer.appendChild(modalBox);
    document.body.style.overflow = 'hidden';
  }
});

document.addEventListener('click', (e) => {
  if (e.target.id === 'modal-close') {
    projectsContainer.removeChild(projectsContainer.lastChild);
    document.body.style.overflow = 'scroll';
  }
});