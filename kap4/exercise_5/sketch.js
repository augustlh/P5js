let d = 25;
let y = d/2;
let speed = 2;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(244,34,23);
}

function draw() {
  background(220);
  ellipse(width/2,y,d,d)
  y = y + speed;
  if(y > height - d/2 || y < 0+d/2){
    speed = speed * -1;
  }
}

