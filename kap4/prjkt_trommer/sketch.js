let d = 100;
let x = 0+d/2;
let letr;
let song;
var binds = ['Q','W','E','R'];

let 

function setup() {
  createCanvas(400, 400);
  background(120,23,23);

}

function draw() {
  for(i = 0; i <= width/2;i++){
    circle(x,height/2,d);
    letr = '' + binds[i];
    text(letr,x-5,height/2+5);
    x += d;
  }
}

function keyPressed(){
    
    console.log('assets/node' + event.key + '.mp3');
}

