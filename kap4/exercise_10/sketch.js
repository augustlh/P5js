let x = 400/2;
let y = 400/2;
let d = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(x,y,d,d);
  if(keyIsDown(RIGHT_ARROW)  && x <= width - d/2){
    x++;
  }
  if(keyIsDown(LEFT_ARROW) && x >= 0 + d/2){
    x--;
  }
  if(keyIsDown(UP_ARROW) && y >= 0 + d/2){
    y = y - 1;
  }
  if(keyIsDown(DOWN_ARROW) && y <= height - d/2){
    y++;
  }

}
