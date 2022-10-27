function setup() {
  createCanvas(720, 400);
  background(200);
  //sætter rotationspunkter om (x,y) = (100,100)
  translate(width / 2, height / 2);
  noStroke();
  //tegner 10 ellipser og roterer dem 45 grader om (x,y) = (100,100)
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 80);
    rotate(PI / 4);
  }
}

//tegner en blomst
