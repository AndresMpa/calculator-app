import { preloadTheme, switchTheme } from "./util/theme.js";
import { registerCalc } from "./calc/index.js";

const themeOne = document.querySelector("#theme-1");
const themeTwo = document.querySelector("#theme-2");
const themeThree = document.querySelector("#theme-3");

const screen = document.querySelector("#screen");
const numpad = document.querySelector("#numpad");

themeOne.addEventListener("change", (event) => switchTheme(event.target.value));
themeTwo.addEventListener("change", (event) => switchTheme(event.target.value));
themeThree.addEventListener("change", (event) =>
  switchTheme(event.target.value),
);

numpad.addEventListener("click", (event) =>
  registerCalc(event.target.value, screen),
);

window.addEventListener("keydown", (event) => registerCalc(event.key, screen));
