function setup() {
  createCanvas(400, 400);
  background(220);
  andenGrads(-4, 8, 1);
  strokeWeight(30);
}

function draw() {
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  drawParabola(6, 14, 9);
}

function andenGrads(a, b, c) {
  x1 = -b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c) / 2) * a;
  x2 = -b - (Math.sqrt(Math.pow(b, 2) - 4 * a * c) / 2) * a;
  let result = [x1, x2];
  print(result);
}

function drawParabola(a, b, c) {
  for (let x = -width / 2; x < width / 2; x++) {
    let y = a * Math.pow(x, 2) + b * x + c;
    point(x + width / 2, height / 2 - y);
  }
}

//hej noah
