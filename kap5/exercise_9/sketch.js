let dist = 5;
let x = 0;
let y = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      line(0, y, width, y);
      line(y, 0, y, height);
    }
  }
  x++;
  y += 2;
}

//ikke helt færdig (havde misforstået opgaven først)
