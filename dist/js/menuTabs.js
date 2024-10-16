const navs = document.querySelectorAll(".menu__nav");
const contents = document.querySelectorAll(".menu__details");

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveNav();
    nav.classList.add("active");
    const activeContent = document.querySelector(`#${nav.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveNav() {
  navs.forEach((nav) => {
    nav.classList.remove("active");
  });
}
function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
