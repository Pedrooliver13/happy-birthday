import { SlideNav } from "./module/slide.js";

const slide = new SlideNav('[data-slide="slide"]', '[data-slide="container"]');

const buttonInit = document.querySelector("[data-js='init-retro']");
const modal = document.querySelector("[data-js='modal']");
const audio = document.querySelector("[data-js='audio']");

const handleClick = () => {
  slide.init();
  slide.addControls('[data-slide="prev"]', '[data-slide="next"]');
  modal.classList.remove("active");
  audio.play();
};

buttonInit.addEventListener("click", handleClick);
