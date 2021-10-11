//switching active class on navigation bar
const navlink_container = document.getElementById("navlink__container");
const navlinks = Array.from(navlink_container.children);
const closeicon = document.querySelector(".closeicon");
const openicon = document.getElementById("openicon--js");
const mediaQuery = window.matchMedia("(min-width: 600px)");
console.log(openicon);

//removing hover
const removeHover = () => {
  navlinks.forEach((navlink) => {
    navlink.classList.remove("nav_link--active");
  });
};

const eventScrollfunction = () => {
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
};

//changing navstyle on scrollhit
const secondnavbar = document.getElementById("secondnavbar--js");
window.addEventListener("scroll", (e) => {
  e.preventDefault();
  if (scrollY >= 200 && window.innerWidth > 600) {
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

//switching navlinks on click
navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (e.target.classList.contains("home-js")) {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // window.innerWidth <= 600
      //   ? (navlink_container.style.animation = "slideout 0.5s forwards")
      //   : "fired";
    } else if (e.target.classList.contains("aboutUs-js")) {
      scrollTo({
        top: 600,
        behavior: "smooth",
      });
      console.log("about");
      window.innerWidth <= 600
        ? (navlink_container.style.animation = "slideout 0.5s forwards")
        : "fired";
    } else if (e.target.classList.contains("ourServices-js")) {
      scrollTo({
        top: 1383,
        behavior: "smooth",
      });
    } else if (e.target.classList.contains("producers-js")) {
      scrollTo({
        top: 2047,
        behavior: "smooth",
      });
    } else if (e.target.classList.contains("contactUs-js")) {
      scrollTo({
        top: 2423.1,
        behavior: "smooth",
      });
    }
  });
});
//navbar slidein
openicon.addEventListener("click", (e) => {
  navlink_container.style.display = "flex";
  navlink_container.style.animation = "slidein  0.5s  forwards";
});
closeicon.addEventListener("click", (e) => {
  navlink_container.style.display = "none";
  navlink_container.style.animation = "slideout 0.5s forwards";
});
eventScrollfunction();
