let len;

function setup() {
  createCanvas(400, 400);
  background(220);
  let w = width / 10;
  line(0, height / 2, width, height / 2);

  for (let i = 0; i < 10; i++) {
    len = floor(random(5, 100));
    rect(i * w, height / 2 - len / 2, w, len);
  }
}

function draw() {}
