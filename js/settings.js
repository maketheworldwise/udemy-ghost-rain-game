const BG_WIDTH = 800;
const BG_HEIGHT = 500;

const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

const HERO_WIDTH = 35;
const HERO_HEIGHT = 54;

const bgElement = document.getElementById("bg");
const startBtnElement = document.getElementById("section__btn-start");
const lifeElements = document.getElementsByClassName("life");
const pointElement = document.getElementById("point");

function removePxString(str) {
  return Number(str.split("px")[0]);
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
