"use strict";
//Slider
//selecting elements
const leftBtn = document.querySelector(".--left");
const rightBtn = document.querySelector(".--right");
let item = document.querySelector(".--item");
let slider = document.querySelector(".slider");

leftBtn.addEventListener("click", () => {
  slider.scrollLeft -= 420;
  console.log("fd");
});
rightBtn.addEventListener("click", () => {
  slider.scrollLeft += 420;
  console.log("fd");
  
});
