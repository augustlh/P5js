let n = 100;
let a1 = 1;
let a2 = 100;
let sn;
let sum = 0;

function setup() {
  createCanvas(400, 400);

  //sum af alle numre fra 1-100 = n*(a_1+a_2)/2
  sn = (n * (a1 + a2)) / 2;
  console.log(sn);

  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
}

function draw() {
  background(220);
}
