function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    print("Museknap holdes nede");
  } else {
    print("Museknap holdes ikke nede");
  }
}
