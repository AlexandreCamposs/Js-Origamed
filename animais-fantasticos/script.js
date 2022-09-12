function initTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li ");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTab();

function initAccordion() {
  const accordion = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordion.length) {
    accordion[0].classList.add(activeClass);
    accordion[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordion.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top:topo,
    //   behavior:'smooth'
    // });
  }

  linksInternos.forEach((links) => {
    links.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function animationInit() {

const sections = document.querySelectorAll(".js-scroll");
if (sections.length) {
  const windowMetade = window.innerHeight * 0.6;
 
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - windowMetade < 0;
      if (sectionVisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
}
animationInit();