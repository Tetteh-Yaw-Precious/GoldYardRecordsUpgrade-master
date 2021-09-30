//switching active class on navigation bar
const navlink_container = document.getElementById("navlink__container");
console.log(navlink_container.children);
const navlinks = Array.from(navlink_container.children);
// navlink_container.addEventListener("mouseover", (e) => {
//   if (e.target !== navlink_container) {
//     e.target.classList.add("nav_link--active");
//   }
// });

// navlink_container.addEventListener("mouseout", (e) => {
//   if (e.target !== navlink_container) {
//     e.target.classList.remove("nav_link--active");
//   }
// });
//navigation navigationbar links on click
// const navlink__switcher = function (e, navlink) {
//   navlink.classList.add("nav_link--active");
//   if (navlink !== e.target && navlink.classList.contains("nav_link--active")) {
//     navlink.classList.remove("nav_link--active");
//   } else if (
//     e.target.classList.contains("aboutUs-js") &&
//     e.target.classList.contains("nav_link--active")
//   ) {
//     scrollTo({
//       top: 600,
//       left: 0,
//       behavior: "smooth",
//     });
//   } else if (
//     e.target.classList.contains("home-js") &&
//     e.target.classList.contains("nav_link--active")
//   ) {
//     scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   } else if (
//     e.target.classList.contains("ourServices-js") &&
//     e.target.classList.contains("nav_link--active")
//   ) {
//     scrollTo({
//       top: 1360,
//       left: 0,
//       behavior: "smooth",
//     });
//   } else if (
//     e.target.classList.contains("producers-js") &&
//     e.target.classList.contains("nav_link--active")
//   ) {
//     scrollTo({
//       top: 2400,
//       left: 0,
//       behavior: "smooth",
//     });
//   } else if (
//     e.target.classList.contains("contactUs-js") &&
//     e.target.classList.contains("nav_link--active")
//   ) {
//     scrollTo({
//       top: 2900,
//       left: 0,
//       behavior: "smooth",
//     });
//   }
// };
// //calling navlink_switcher function
// navlinks.forEach((navlink) => {
//   navlink_container.addEventListener("click", (e) => {
//     navlink__switcher(e, navlink);
//   });
// });
//removing hover
const removeHover = () => {
  navlinks.forEach((navlink) => {
    navlink.classList.remove("nav_link--active");
  });
};
//checking for scrollbar location
window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  console.log(scroll);
  if (scroll >= 2400) {
    removeHover();
    const contactJs = document.querySelector(".contactUs-js");
    contactJs.classList.add("nav_link--active");
  } else if (scroll >= 1955) {
    removeHover();
    const producersJs = document.querySelector(".producers-js");
    producersJs.classList.add("nav_link--active");
  } else if (scroll >= 855) {
    removeHover();
    const ourServicesJs = document.querySelector(".ourServices-js");
    ourServicesJs.classList.add("nav_link--active");
  } else if (scroll >= 600) {
    removeHover();
    const aboutUsJs = document.querySelector(".aboutUs-js");
    aboutUsJs.classList.add("nav_link--active");
  } else {
    removeHover();
    const homeJs = document.querySelector(".home-js");
    homeJs.classList.add("nav_link--active");
  }
});

//changing navstyle on scrollhit
const secondnavbar = document.getElementById("secondnavbar--js");
window.addEventListener("scroll", (e) => {
  scrollY >= 600
    ? secondnavbar.classList.add("whitebackground")
    : secondnavbar.classList.remove("whitebackground");

  if (scrollY >= 200) {
    secondnavbar.classList.add("whitebackground");
    navlinks.forEach((navlink) => {
      navlink.style.color = "#010101";
    });
  } else {
    secondnavbar.classList.remove("whitebackground");
    navlinks.forEach((navlink) => {
      navlink.style.color = "white";
    });
  }
});
