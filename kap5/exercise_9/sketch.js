let dist = 8;
let x = 0;
let y = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  //tegner 10 lodrete og vandrette linjer, som vil bevæge sig hen ad skærmen efter variablerne x og y
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      line(0, y + i * dist, width, y + i * dist);
      line(x + i * dist, 0, x + i * dist, height);
    }
  }

  x += 2;
  y += 4;
}
