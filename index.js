// call the html selectors
const menuToggler = document.getElementById("humberger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose = document.getElementById("humberger-close");
const menuLinks = document.querySelectorAll("#mobile-nav li a");
const projectsContainer = document.querySelector(".project-container");
//Projects Data
let project_data = [
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "",
    featuredImage: "",
    technologies: ["Ruby on Rail", "HTML", "CSS", "JavaScript"],
    linkToLive: "",
    linkToSource: "",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "",
    featuredImage: "",
    technologies: ["Ruby on Rail", "HTML", "CSS", "JavaScript"],
    linkToLive: "",
    linkToSource: "",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "",
    featuredImage: "",
    technologies: ["Ruby on Rail", "HTML", "CSS", "JavaScript"],
    linkToLive: "",
    linkToSource: "",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "",
    featuredImage: "",
    technologies: ["Ruby on Rail", "HTML", "CSS", "JavaScript"],
    linkToLive: "",
    linkToSource: "",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "",
    featuredImage: "",
    technologies: ["Ruby on Rail", "HTML", "CSS", "JavaScript"],
    linkToLive: "",
    linkToSource: "",
  },
  {
    name: "Multi-Post Stories Gain+Glory",
    description: "",
    featuredImage: "",
    technologies: ["Ruby on Rail", "HTML", "CSS", "JavaScript"],
    linkToLive: "",
    linkToSource: "",
  },
];

// Add event-listener tot the hamburger
menuToggler.addEventListener("click", () => {
  mobileMenu.classList.add("openMenu");
  document.body.style.overflow = "hidden";
});

// Close event=listener
menuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("openMenu");
  document.body.style.overflow = "scroll";
});

// Link each section of the paage
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    mobileMenu.classList.remove("openMenu");
    document.body.style.overflow = "scroll";
  });
});

//Display Projects

project_data.forEach((project, index) => {


  let project_content = `
  <div class="card-content">
    <h4 class="project-title text-primary text-center">${project.name}</h4>
    <ul class="tag-language-container list-style-none ">
    ${project.technologies.map(
      (tech) =>`<li class="tag-language">${tech}</li>`
    ).join('')}
   </ul>
   <button type='button' class="project-action">See project</button>
  </div>
  <div class="image-placeholder"></div>
  `;

  projectwrap = document.createElement("li");
  projectwrap.setAttribute("class", `card`);
  projectwrap.innerHTML = project_content;
  projectsContainer.appendChild(projectwrap);
});
