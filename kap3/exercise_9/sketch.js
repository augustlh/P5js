let x; 
let y; 
let xspeed; 
let yspeed; 
let d = 1;
let hspeed;
let hyspeed;

function setup() { 
  createCanvas(400, 400);
  x = 200
  y = 200;
  xspeed = width/2; 
  yspeed = 0; 
  hspeed = 0;
  hyspeed = height/2;
  strokeWeight(30);
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
  line(hspeed,hyspeed,hspeed+1,y);
  hspeed += d;
}
