let stamme, gran;
let kugler = [];
let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "black",
  "white",
  "grey",
];
let positions;

function setup() {
  createCanvas(400, 400);
  //stamme = new Stamme(200, 300, 20);
  stamme = new Stamme(width / 2, height - 100, 20);
  gran = new Gran(200 - 40, 300, 100);
  //star = new Star(width / 2, 70, 10);
  positions = [
    createVector(210, 230),
    createVector(210, 265),
    createVector(198, 250),
    createVector(210 + 12, 280),
  ];
  //positions = [createVector(210,220),createVector(215,215),createVector(205,215)/*n2*/,createVector(210,240),createVector(216,238),createVector(204,238),createVector(222,236),createVector(198,236)/*n3*/,createVector(210,260),createVector(216,258),createVector(204,258),createVector(222,256),createVector(198,256)]
  for (let i = 0; i < positions.length; i++) {
    kugler[i] = new Kugler(positions[i].x, positions[i].y, 15);
  }
}

function draw() {
  background(220);
  push();
  noStroke();
  stamme.show();
  gran.show();
  pop();
  push();
  for (let i = 0; i < kugler.length; i++) {
    //kugler[i].update(colors[int(random(0,colors.length))]);
    let color = colors[int(random(0, colors.length))];
    kugler[i].show();
    kugler[i].update(color);
  }
  pop();
  push();
  fill(255, 255, 0);
  translate(200 + 10.5, 265 - 100);
  rotate(frameCount / -100.0);
  star(0, 0, 10, 20, 5);
  pop();
}
//kke nødvendigvis at bruge class
class Stamme {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
  }

  show() {
    push();
    fill(100, 50, 0);
    noStroke();
    rect(this.x, this.y, this.w, this.w * 2);
    pop();
  }
}

class Gran {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
  }

  show() {
    push();
    //dark green
    fill(0, 100, 0);
    triangle(
      this.x - 10,
      this.y,
      this.x + this.h + 10,
      this.y,
      this.x + this.h / 2,
      this.y - this.h
    );

    triangle(
      this.x - 2,
      this.y - 35,
      this.x + this.h + 2,
      this.y - 35,
      this.x + this.h / 2,
      this.y - this.h - 20
    );

    triangle(
      this.x + 10,
      this.y - 70,
      this.x + this.h - 10,
      this.y - 70,
      this.x + this.h / 2,
      this.y - this.h - 40
    );

    pop();
  }
}

class Kugler {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    push();
    circle(this.x, this.y, this.r);
    pop();
  }

  update(colors) {
    fill(colors);
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

/*class Star {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
  }

  show() {
    push();
    fill(255, 255, 0);
    beginShape();
    rotate(PI / 3.2);
    for (let a = 0; a < TWO_PI; a += PI / 2.5) {
      let sx = this.x + cos(a) * this.radius;
      let sy = this.y + sin(a) * this.radius;
      vertex(sx, sy);
      sx = this.x + (cos(a + PI / 5) * this.radius) / 2;
      sy = this.y + (sin(a + PI / 5) * this.radius) / 2;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
  }
}*/
