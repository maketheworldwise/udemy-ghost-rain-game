let player = new Hero();

function init() {
  document.addEventListener(
    "keydown",
    function (event) {
      checkKey(event, true);
    },
    false
  );

  document.addEventListener(
    "keyup",
    function (event) {
      checkKey(event, false);
    },
    false
  );

  startBtnElement.addEventListener("click", function (event) {
    let interval = setInterval(function () {
      let ghost = new Ghost();
      if (lifeElements.length === 0) {
        clearInterval(interval);
        return;
      }
      ghost.create();
    }, 300);
  });
}

function checkKey(event, isMoving) {
  if (isMoving) {
    const keyCode = event.code;

    switch (keyCode) {
      case "ArrowLeft":
        player.move("left");
        event.preventDefault();
        break;
      case "ArrowRight":
        player.move("right");
        event.preventDefault();
        break;
      case "ArrowUp":
        heroElement.className = "up";
        event.preventDefault();
    }
  } else {
    player.setDownDirection();
  }
}

init();
