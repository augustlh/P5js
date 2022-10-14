let antal = 10;
let j = 0;

function setup() {
  createCanvas(400, 400);
  background(23, 122, 3);
  while (j < antal) {
    for (let i = 0; i < 1; i++) {
      rect(random(0, width), random(0, height), i + 1 * 10);
    }
    j++;
  }
}

function draw() {}
