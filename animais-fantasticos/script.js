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
  const activeClass = 'ativo'

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
