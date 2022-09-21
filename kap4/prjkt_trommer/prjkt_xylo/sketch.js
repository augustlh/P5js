let d;
let h = 100;
let x, y, z, j, k, l;
let ca, cb, cc;
var binds = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
];

function preload() {
  cas = loadSound("assets/1.mp3");
  cbs = loadSound("assets/2.mp3");
  ccs = loadSound("assets/3.mp3");
}

function setup() {
  createCanvas(600, 600);
  background(156);
  preload();
  noStroke();
  d = width / 3;
  x = 0;
  y = -d;
  z = d;
  j = height;
  k = d * 2;
  l = -d;
}

function draw() {
  if (ca === true) {
    rect(x, y, d, d);
    y += 5;
    if (y + (d / 2) * 1.8 >= height) {
      ca = false;
      fill(156);
      rect(d * 0, 0, d, height);
      y = -d;
    }
  }
  if (cb === true) {
    rect(z, j, d, d);
    j -= 5;
    if (j + (d / 2) * 0.4 <= 0) {
      cb = false;
      fill(156);
      rect(d, 0, d, height);
      j = height;
    }
  }
  if (cc === true) {
    rect(k, l, d, d);
    l += 5;
    if (l + (d / 2) * 1.8 >= height) {
      cc = false;
      fill(156);
      rect(d * 2, 0, d, height);
      l = -d;
    }
  }
}

function keyPressed() {
  if (key === "q") {
    fill(255);
    ca = true;
    cas.play();
  }
  if (key === "w") {
    fill(255);
    cb = true;
    cbs.play();
  }
  if (key === "e") {
    fill(255);
    cc = true;
    ccs.play();
  }
}
