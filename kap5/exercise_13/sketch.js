let angle = 0;
let x = 50;
let y = 50;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  fill("pink");
  noStroke();
}

function draw() {
  background("yellow");
  translate(x, y);
  //roterer om (x,y) med vinklen (angle)
  rotate(angle);
  ellipseMode(CENTER);

  //får dem til at bevæge isg hen af x-aksen
  x = x + 1;
  //angle inkrementeres for at fortsætte rotationen
  angle = angle + 4;

  //tegner et givent antal cikler
  for (var row = 3; row <= width; row = row + 50) {
    for (var col = 3; col <= height; col = col + 50) {
      ellipse(row, col, 20, 20);
    }
  }
}
