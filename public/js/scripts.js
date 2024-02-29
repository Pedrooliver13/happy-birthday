import { SlideNav } from "./module/slide.js";

const slide = new SlideNav('[data-slide="slide"]', '[data-slide="container"]');

const audio = new Audio(
  "public/audio/Coldplay - Higher Power (Live at The BRIT Awards, London 2021).mp3"
);

slide.init();
slide.addControls('[data-slide="prev"]', '[data-slide="next"]');

window.addEventListener("load", () => {
  audio.play();
});
