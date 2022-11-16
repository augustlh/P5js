function setup() {
  createCanvas(400, 400);
  circle(width / 2, height / 2, 28);
}

function draw() {}

function isOnTarget(mousex, mousey, x, y, d) {
  if (dist(mousex, mousey, x, y) < d / 2) {
    return true;
  }
  return false;
}

function mousePressed() {
  if (mouseButton === LEFT) {
    if (isOnTarget(mouseX, mouseY, width / 2, height / 2, 28)) {
      print("true");
    }
  }
}
