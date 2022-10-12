function setup() {
  createCanvas(400, 400);
  //Tegner de lige tal mellem 0 og 100 tilfældige steder på skærmen med farven rød.
  fill(255, 0, 0);
  for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
      text(i, random(0, width), random(0, height));
    }
  }
}

function draw() {}
