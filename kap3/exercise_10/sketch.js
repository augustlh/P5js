let x; 
let y; 
let xspeed; 
let yspeed; 
let d = 1;

function setup() { 
  createCanvas(400, 400);
  x = 200
  y = 200;
  xspeed = width/2; 
  yspeed = 0; 
} 

function draw() { 
  yLine();
  xLine();
}

function yLine(){
  if(yspeed>=height || yspeed <= 0){
    if(yspeed>=height){
      stroke(20)
      stroke(random(0,254),random(0,254),random(0,254))
      d = -1;
      yspeed += d;
    }else{
      stroke(20)
      stroke(random(0,254),random(0,254),random(0,254))
      d = 1;
      yspeed += d;
    }
  }else{
    line(xspeed, yspeed, x, yspeed+1);  
    yspeed +=d; 
  }
}

function xLine(){
  if(xspeed>=width || xspeed <= 0){
    if(xspeed>=width){
      stroke(20)
      stroke(random(0,254),random(0,254),random(0,254))
      d = -1;
      xspeed += d;
    }else{
      stroke(20)
      stroke(random(0,254),random(0,254),random(0,254))
      d = 1;
      xspeed += d;
    }
  }else{
    line(xspeed, yspeed, xspeed+1, y);  
    xspeed +=d; 
  }
}