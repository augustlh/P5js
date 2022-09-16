let x; 
let y; 
let xspeed; 
let yspeed; 

function setup() { 
  createCanvas(400, 400);
  x = width/2
  y = height/2
  xspeed = 4; 
  yspeed = 1*xspeed; 
} 

function draw() { 
  background(220);
  ellipse(x, y, 50, 50); 
  if(x >=width-25 || x <=0+25){
    xspeed=0;
    if(y>=height-25 || y<=0+25){
      yspeed=0;
    }
  }else{
    x+=xspeed; 
    y+=yspeed; 
}
}