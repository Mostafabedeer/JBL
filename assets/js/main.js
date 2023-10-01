/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu"),
  btnClose = document.querySelector("#nav-close"),
  btnToggle = document.querySelector("#nav-toggle");
btnToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});
btnClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});
/*=============== ADD BLUR HEADER ===============*/
const header = document.querySelector("#header");
const blurHeader = () => {
  window.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
/*=============== SWIPER FAVORITES ===============*/
const swiper = new Swiper(".favorite__swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grabCursor: true,
  breakPoints: {
    768: {
      slidesPerView: 3,
    },
  },
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = document.querySelector("#scrollup");
const showScrollUp = () => {
  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", showScrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      scetionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > scetionTop && scrollDown <= scetionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true //Animations repeat
});
sr.reveal(`.home__social, .favorite__container, .sponsor__container, .footer`);
sr.reveal(`.home__social`);
sr.reveal(`.home__title span:nth-child(1)`, { origin: "left", opacity: 1 });
sr.reveal(`.home__title span:nth-child(3)`, { origin: "right", opacity: 1 });
sr.reveal(`.home__tooltip, .home__button`, { origin: "bottom" });
sr.reveal(`.about__data`, { origin: "left" });
sr.reveal(`.about__img, .model__tooltip`, { origin: "right" });
