let d = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(mouseX <= width/2){
    circle(width/2,height/2,d)
  }else if(mouseX >= width/2){
    rect(width/2-d/2,height/2-d/2,d,d)
  }
}