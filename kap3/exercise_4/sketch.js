function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if (keyIsPressed && key === 'e') {
    ellipse(mouseX, mouseY, 50, 50);
  }else if(keyIsPressed && key === 'f') {
    rect(mouseX, mouseY, 50, 50);
  }else if(keyIsPressed && key === 'c') {
    circle(mouseX, mouseY, 50);
  }
}
