let num = 10;
let colors = [
  "red",
  "aqua",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
];

function setup() {
  createCanvas(400, 400);
  background(23, 122, 3);
  strokeWeight(30);
  for (let i = 0; i < 10; i++) {
    stroke(colors[i]);
    point(random(0, width), random(0, height));
    console.log(i);
  }
}

function draw() {}
