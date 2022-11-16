function setup() {
  createCanvas(400, 400);
  sum("3", "a");
}

function draw() {
  background(220);
}

function sum(a, b) {
  print(a + b);
  return a + b;
}
