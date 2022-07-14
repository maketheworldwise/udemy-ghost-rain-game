document.addEventListener("keydown", function (event) {
  heroAction(event.code);
});

document.addEventListener("keyup", cleanUp);
