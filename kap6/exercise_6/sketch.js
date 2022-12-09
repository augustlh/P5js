function setup() {
  createCanvas(400, 400);
  translate(width/2,height/2)
  triangleConst(200, 10, 60);
}

function draw() {}

function triangleConst(a, b, c) {
  A = 0;
  B = 0;
  C = 90;

  A = Math.acos(
    (Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c)
  );

  B = 180 - A - C;

  triangle(a, 0, b, 0, c, c);

  //triangle(
  width / 2,
    height / 2 + a,
    width / 2 + b,
    height / 2,
    width / 2,
    height / 2 - c;
  //);
}
