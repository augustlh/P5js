function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke(0);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
