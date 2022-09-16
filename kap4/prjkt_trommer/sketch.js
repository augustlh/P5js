let d = 100;
let x = 0+d/2;
let letr;
let song;
var binds = ['q','w','e','r'];

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
  if(binds.includes('' + event.key)){
    console.log('assets/node' + event.key + '.mp3');
    song = new Audio('assets/node' + event.key + '.mp3');
    song.play();
  }
}

