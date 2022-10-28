function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 13; i++) {
    if (i % 3 == 0 && i != 0) {
      print(i);
    }
  }
}

function draw() {
  background(220);
}
