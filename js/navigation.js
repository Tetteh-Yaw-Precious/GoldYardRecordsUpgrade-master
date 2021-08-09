//switching active class on navigation bar
const navlink_container = document.querySelector(".navlink__container");
const navlinks = Array.from(navlink_container.children);
scroll;

//navigation navigationbar links on click
const navlink__switcher = function (e, navlink) {
  navlink.classList.add("nav_link--active");
  if (navlink !== e.target && navlink.classList.contains("nav_link--active")) {
    navlink.classList.remove("nav_link--active");
  } else if (
    e.target.classList.contains("aboutUs-js") &&
    e.target.classList.contains("nav_link--active")
  ) {
    scrollTo({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  } else if (
    e.target.classList.contains("home-js") &&
    e.target.classList.contains("nav_link--active")
  ) {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  } else if (
    e.target.classList.contains("ourServices-js") &&
    e.target.classList.contains("nav_link--active")
  ) {
    scrollTo({
      top: 1360,
      left: 0,
      behavior: "smooth",
    });
  } else if (
    e.target.classList.contains("producers-js") &&
    e.target.classList.contains("nav_link--active")
  ) {
    scrollTo({
      top: 2400,
      left: 0,
      behavior: "smooth",
    });
  } else if (
    e.target.classList.contains("contactUs-js") &&
    e.target.classList.contains("nav_link--active")
  ) {
    scrollTo({
      top: 2900,
      left: 0,
      behavior: "smooth",
    });
  }
};
//calling navlink_switcher function
navlinks.forEach((navlink) => {
  navlink_container.addEventListener("click", (e) => {
    navlink__switcher(e, navlink);
  });
});

//checking for scrollbar location
window.addEventListener("scroll", (e) => {
  let scroll = this.scrollY;
  if (scroll >= 2800) {
    navlinks.forEach((navlink) => {
      navlink.classList.remove("nav_link--active");
    });
    const contactJs = document.querySelector(".contactUs-js");
    contactJs.classList.add("nav_link--active");
  } else if (scroll >= 2400) {
    navlinks.forEach((navlink) => {
      navlink.classList.remove("nav_link--active");
    });
    const producersJs = document.querySelector(".producers-js");
    producersJs.classList.add("nav_link--active");
  } else if (scroll >= 1360) {
    navlinks.forEach((navlink) => {
      navlink.classList.remove("nav_link--active");
    });
    const ourServicesJs = document.querySelector(".ourServices-js");
    ourServicesJs.classList.add("nav_link--active");
  } else if (scroll >= 600) {
    navlinks.forEach((navlink) => {
      navlink.classList.remove("nav_link--active");
    });
    const aboutUsJs = document.querySelector(".aboutUs-js");
    aboutUsJs.classList.add("nav_link--active");
  } else {
    navlinks.forEach((navlink) => {
      navlink.classList.remove("nav_link--active");
    });
    const homeJs = document.querySelector(".home-js");
    homeJs.classList.add("nav_link--active");
  }
});
