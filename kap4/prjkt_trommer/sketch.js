let d = 100;
let x = 0+d/2;
function setup() {
  createCanvas(400, 400);
  background(120,23,23);
}

function draw() {
  for(i = 0; i <= width/2;i++){
    circle(x,height/2,d);
    x += d;
  }
  console.log('lol')
}
