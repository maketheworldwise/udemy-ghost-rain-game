function createGhost() {
  const ghostElement = document.createElement("span");

  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0px";

  let randomLeft = randomNum();
  ghostElement.style.left = randomLeft + "px"; // "50%";

  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bgElement.appendChild(ghostElement);
}

createGhost();

function randomNum() {
  let randomNumberUnder755 = Math.floor(Math.random() * 755);
  return randomNumberUnder755;
}
