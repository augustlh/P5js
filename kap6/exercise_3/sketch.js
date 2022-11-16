function setup() {
  createCanvas(400, 400);
  circle(width / 2, height / 2, 28);
  circle(width / 2 - 20, height / 2, 15);
  overlap(width / 2, width / 2 - 20, height / 2, height / 2, 28, 15);
}

function draw() {}

function overlap(x1, x2, y1, y2, r1, r2) {
  if (dist(x1, y1, x2, y2) < r1) {
    print("true");
    return true;
  }
  print("false");
  return false;
}
