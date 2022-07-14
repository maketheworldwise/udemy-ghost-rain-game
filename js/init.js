document.addEventListener("keydown", function (event) {
  heroAction(event.code);
});

document.addEventListener("keyup", cleanUp);

startBtnElement.addEventListener("click", function (event) {
  let interval = setInterval(function () {
    if (lifeElements.length === 0) {
      clearInterval(interval);
      return;
    }
    createGhost();
  }, 300);
});
