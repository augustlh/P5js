function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    print("Tryk på en museknap");
  }
  if (!mouseIsPressed && mouseX > width / 2) {
    print("Højre");
  } else if (!mouseIsPressed && mouseX < width / 2) {
    print("Left");
  }
}
