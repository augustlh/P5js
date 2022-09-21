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
  cas = loadSound("assets/1.wav");
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
  background(23);
  if (ca === true) {
    rect(x, y, d, d);
    y += 4;
    if (y + (d / 2) * 1.8 >= height) {
      ca = false;
      y = -d;
    }
  }
  if (cb === true) {
    rect(z, j, d, d);
    j -= 5;
    if (j + (d / 2) * 0.4 <= 0) {
      cb = false;
      j = height;
    }
  }
  if (cc === true) {
    rect(k, l, d, d);
    l += 5;
    if (l + (d / 2) * 1.8 >= height) {
      cc = false;
      l = -d;
    }
  }
}

function keyPressed() {
  if (key === "q" && ca != true) {
    fill(255);
    ca = true;
    cas.play();
  }
  if (key === "w" && cb != true) {
    fill(255);
    cb = true;
    cbs.play();
  }
  if (key === "e" && cc != true) {
    fill(255);
    cc = true;
    ccs.play();
  }
}
