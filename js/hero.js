class Hero {
  constructor() {
    this.heroElement = document.getElementById("hero");
    this.left = removePxString(getComputedStyle(this.heroElement).left);
    this.speed = 10;
  }

  move(direction) {
    if (direction === "left") {
      this.heroElement.className = "left";
      this.setLeft(-this.speed);
    } else if (direction === "right") {
      this.heroElement.className = "right";
      this.setLeft(this.speed);
    }
  }

  setLeft(speed) {
    // const currentLeft = removePxString(getComputedStyle(heroElement).left);
    // const newLeft = currentLeft + left;

    const newLeft = this.left + speed;
    if (newLeft > BG_WIDTH - HERO_WIDTH || newLeft < 0) {
      return;
    }

    this.heroElement.style.left = newLeft + "px";
    this.left = newLeft;
  }

  setDownDirection() {
    this.heroElement.className = "down";
  }
}
