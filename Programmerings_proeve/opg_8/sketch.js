let afstand;
let d = 30;
let x1;
let x2;
let y1;
let y2;
function setup() {
  createCanvas(400, 400);
  background(220);
  x1 = random(0 + d / 2, width - d / 2);
  x2 = random(0 + d / 2, width - d / 2);
  y1 = random(0 + d / 2, width - d / 2);
  y2 = random(0 + d / 2, height - d / 2);
  circle(x1, y1, d);
  circle(x2, y2, d);

  print(sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
}

function draw() {}
