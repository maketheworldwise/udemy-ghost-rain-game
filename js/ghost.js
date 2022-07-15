class Ghost {
  constructor() {
    this.ghostElement = document.createElement("span");
    this.ghostElement.style.position = "absolute";
    this.ghostElement.style.top = "0px";
    this.ghostElement.style.left = randomNum(0, BG_WIDTH - GHOST_WIDTH) + "px";
    this.ghostElement.style.width = GHOST_WIDTH + "px";
    this.ghostElement.style.height = GHOST_HEIGHT + "px";
    this.ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

    this.speed = 1;
  }

  create() {
    bgElement.appendChild(this.ghostElement);
    window.requestAnimationFrame(() => {
      this.move();
    });
  }

  move() {
    const ghostTopPoint = removePxString(this.ghostElement.style.top);
    const ghostLeftPoint = removePxString(this.ghostElement.style.left);
    const heroLeftPoint = removePxString(player.heroElement.style.left);

    if (lifeElements.length === 0) {
      clearInterval(interval);
      return;
    }

    if (ghostTopPoint >= BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
      const ghostPointRange = [ghostLeftPoint, ghostLeftPoint + GHOST_WIDTH];
      const heroPointRange = [heroLeftPoint, heroLeftPoint + HERO_WIDTH];

      if (
        (ghostPointRange[0] < heroPointRange[0] &&
          heroPointRange[0] < ghostPointRange[1]) ||
        (ghostPointRange[0] < heroPointRange[1] &&
          heroPointRange[1] < ghostPointRange[1])
      ) {
        this.die();
        return;
      }
    }

    const move = ghostTopPoint + this.speed;

    if (move >= BG_HEIGHT - GHOST_HEIGHT) {
      this.remove();
      pointElement.innerText = Number(pointElement.innerText) + 1;
      return;
    }

    this.ghostElement.style.top = move + "px";

    window.requestAnimationFrame(() => {
      this.move();
    });
  }

  remove() {
    this.ghostElement.remove();
  }

  die() {
    this.ghostElement.style.backgroundPosition = "-45px 0px";
    const soundEffect = new Audio("./audio/dying.wav");
    soundEffect.play();

    setTimeout(() => {
      this.remove();
    }, 300);

    let point = Number(pointElement.innerText) - 1;
    if (point < 0) {
      pointElement.innerText = 0;
    } else {
      pointElement.innerText = point;
    }
    lifeElements[lifeElements.length - 1].remove();
  }
}
