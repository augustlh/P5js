function setup() {
  createCanvas(400, 400);
  let i = 0;
  fill(0, 0, 235);
  while (i < 101) {
    if (i % 2 == 1) {
      text(i, random(0, width), random(0, height));
    }
    i++;
  }
}

function draw() {}
