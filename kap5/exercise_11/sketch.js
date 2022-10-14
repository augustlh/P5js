let a = [];
function setup() {
  createCanvas(400, 400);
  background(23, 122, 3);
  for (let i = 0; i < 10; i++) {
    a[i] = random(0, 100);
  }
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    circle(i * 40, 200, a[i]);
  }
}

function draw() {}
