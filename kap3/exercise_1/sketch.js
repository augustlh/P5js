function setup() {
  createCanvas(400, 400);
  background(220);
}

//circle that moves around the edges of the screen
function draw() {
  ellipse(mouseX, mouseY, 20, 20);
}
