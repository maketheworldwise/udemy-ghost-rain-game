function createGhost() {
  const ghostElement = document.createElement("span");

  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0px";

  let randomLeft = randomNum(0, BG_WIDTH - GHOST_WIDTH);
  ghostElement.style.left = randomLeft + "px"; // "50%";

  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bgElement.appendChild(ghostElement);
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

createGhost();
