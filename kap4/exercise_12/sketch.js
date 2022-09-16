let d = 25;
let x1;
let y1;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(23,34,56);
  x1 = int(random(0+25,400-25));
  y1 = int(random(0+25,400-25));
  console.log(x1)
}

function draw() {
  background(220);
  ellipse(x1,y1,d,d)
  mousePressed;
}

function mousePressed(){
  if(dist(mouseX,mouseY,x1,y1) < d){
    x1 = int(random(0+d,400-d))
    y1 = int(random(0+d,400-d))
  }
}