//switching active class on navigation bar
const navlink_container = document.querySelector(".navlink__container");
const navlinks = Array.from(navlink_container.children);

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
      left: 100,
      behavior: "smooth",
    });
  } else if (
    e.target.classList.contains("home-js") &&
    e.target.classList.contains("nav_link--active")
  ) {
    scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  } else if (
    e.target.classList.contains("ourServices-js") &&
    e.target.classList.contains("nav_link--active")
  ) {
    scrollTo({
      top: 1360,
      left: 100,
      behavior: "smooth",
    });
  } else if (
    e.target.classList.contains("producers-js") &&
    e.target.classList.contains("nav_link--active")
  ) {
    scrollTo({
      top: 2400,
      left: 100,
      behavior: "smooth",
    });
  } else if (
    e.target.classList.contains("contactUs-js") &&
    e.target.classList.contains("nav_link--active")
  ) {
    scrollTo({
      top: 2900,
      left: 100,
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
