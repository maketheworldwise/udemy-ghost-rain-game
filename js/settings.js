const BG_WIDTH = 800;
const BG_HEIGHT = 500;

const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

const HERO_WIDTH = 35;
const HERO_HEIGHT = 54;

const heroElement = document.getElementById("hero");
const bgElement = document.getElementById("bg");

function removePxString(str) {
  return Number(str.split("px")[0]);
}
