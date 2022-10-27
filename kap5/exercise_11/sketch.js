let board = [];
let w = 800 / 8;

function setup() {
  createCanvas(800, 800);
  noStroke();

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 != 0) {
        fill(0, 0, 0);
      } else {
        fill(255);
      }
      rect(i * w, j * w, w, w);
    }
  }
}

function draw() {}
