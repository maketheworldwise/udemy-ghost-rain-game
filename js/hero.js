function heroAction(eventCode) {
  const heroLeftPoint = Number(
    getComputedStyle(heroElement).left.split("px")[0]
  );
  const move = [heroLeftPoint - 10, heroLeftPoint + 10];

  switch (eventCode) {
    case "ArrowLeft":
      heroElement.className = "left";
      heroMove(move[0]);
      break;
    case "ArrowRight":
      heroElement.className = "right";
      heroMove(move[1]);
      break;
    case "ArrowUp":
      heroElement.className = "up";
  }
}

function heroMove(move) {
  if (move >= -15 && move <= 760) {
    heroElement.style.left = move + "px";
  }
}

function cleanUp() {
  heroElement.className = "down";
}
