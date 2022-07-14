document.addEventListener("keydown", function (event) {
  // 키를 눌렀을 때

  const heroLeftWithoutPx = Number(
    getComputedStyle(heroElement).left.split("px")[0]
  );

  switch (event.code) {
    case "ArrowRight":
      heroElement.className = "left";
      calculatedLeft = heroLeftWithoutPx + 10;

      if (calculatedPosition <= 750) {
        heroElement.style.left = calculatedPosition + "px";
      }
      break;
    case "ArrowLeft":
      heroElement.className = "right";
      calculatedLeft = heroLeftWithoutPx - 10;

      if (calculatedPosition >= 0) {
        heroElement.style.left = calculatedPosition + "px";
      }
      break;
    case "ArrowUp":
      heroElement.className = "up";
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", function () {
  // 키를 떼었을 때
  heroElement.className = "down";
});
