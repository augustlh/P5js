function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(mouseIsPressed) {
    mousePressed();
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    ellipse(mouseX, mouseY, 50, 50);
  } else if (mouseButton === RIGHT) {
    rect(mouseX, mouseY, 50, 50);
  }
}

