function setup() {
  createCanvas(400, 400);
  background(220);
  andenGrads(-4, 8, 1);
  strokeWeight(2);
  drawParabola(0.1, 1, 1);

  push();
  stroke(255, 23, 23);
  strokeWeight(1);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  pop();
}

function draw() {}
function andenGrads(a, b, c) {
  x1 = -b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c) / 2) * a;
  x2 = -b - (Math.sqrt(Math.pow(b, 2) - 4 * a * c) / 2) * a;
  let result = [x1, x2];
  print(result);
}

function drawParabola(a, b, c) {
  let k = [];
  for (let x = -width; x < width; x += 0.01) {
    let y = a * Math.pow(x, 2) + b * x + c;
    point(x + width / 2, -y + height / 2);
    k.push(createVector(x + width / 2, -y + height / 2));
  }
  beginShape();
  for (let v in k) {
    vertex(v.x, v.y);
  }
  endShape();
}
