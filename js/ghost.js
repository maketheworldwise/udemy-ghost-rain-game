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

  setInterval(function () {
    const ghostTopPoint = removePxString(ghostElement.style.top);
    const ghostLeftPoint = removePxString(ghostElement.style.left);
    const heroLeftPoint = removePxString(heroElement.style.left);

    if (ghostTopPoint >= BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
      const ghostPointRange = [ghostLeftPoint, ghostLeftPoint + GHOST_WIDTH];
      const heroPointRange = [heroLeftPoint, heroLeftPoint + HERO_WIDTH];

      if (
        (ghostPointRange[0] < heroPointRange[0] &&
          heroPointRange[0] < ghostPointRange[1]) ||
        (ghostPointRange[0] < heroPointRange[1] &&
          heroPointRange[1] < ghostPointRange[1])
      ) {
        killGhost(ghostElement);
        return;
      }
    }

    const move = ghostTopPoint + 10;

    if (move >= BG_HEIGHT - GHOST_HEIGHT) {
      ghostElement.remove();
      return;
    }

    ghostElement.style.top = move + "px";
  }, 100);
}

function killGhost(ghostElement) {
  ghostElement.style.backgroundPosition = "-45px 0px";
  setTimeout(function () {
    ghostElement.remove();
  }, 300);
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

setInterval(createGhost, 300);
