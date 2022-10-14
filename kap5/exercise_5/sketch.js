let r = 10;
function setup() {
  createCanvas(400, 400);
  background(23, 122, 3);
  for (let i = 1; i < 31; i++) {
    r = i *= 1.99;
    circle(width / 2, height / 2, r);
  }
}

function draw() {}
