import { SlideNav } from "./module/slide.js";

const slide = new SlideNav('[data-slide="slide"]', '[data-slide="container"]');
const audio = document.querySelector("audio");

slide.init();
slide.addControls('[data-slide="prev"]', '[data-slide="next"]');

window.onload(() => audio.play());
