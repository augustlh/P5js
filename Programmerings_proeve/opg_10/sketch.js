function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseX > width / 2) {
    //hvis musen er større end width/2 (width/2 er eksluderet)
    print("Right");
  } else {
    print("Left");
  }
}
