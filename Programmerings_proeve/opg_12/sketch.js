let r;

function setup() {
  createCanvas(400, 400);
  frameRate(144);
}

function draw() {
  background(220);
  r = mouseX / 2;
  circle(100, 100, r);
}
