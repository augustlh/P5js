let rs;

function setup() {
  createCanvas(400, 400);
  background(220);
  rs = floor(random(40, 51));
  rect(width / 2 - rs / 2, height / 2 - rs / 2, rs, rs);
}

function draw() {
  if (
    mouseX - 20 / 2 > width / 2 - rs / 2 &&
    mouseX + 20 / 2 < width / 2 - rs / 2 + rs &&
    mouseY - 20 / 2 > height / 2 - rs / 2 &&
    mouseY + 20 / 2 < height / 2 - rs / 2 + rs
  ) {
    circle(mouseX, mouseY, 20);
  }
}
