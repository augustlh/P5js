function setup() {
  createCanvas(400, 400);
  computeLeipniz(5000000);
  print(ramanujanPi(43));
}

function draw() {
  background(220);
}

function computeLeipniz(i) {
  let pi = 0;
  for (let j = 0; j < i; j++) {
    pi += (-1) ** j / (2 * j + 1);
  }
  print(4 * pi);
}

function ramanujanPi(n) {
  if (n <= 43) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum +=
        ((2 * sqrt(2)) / 99 ** 2) *
        (factorial(4 * i) / factorial(i) ** 4) *
        ((26390 * i + 1103) / 396 ** (4 * i));
    }
    return 1 / sum;
  } else {
    return;
  }
}

/*
function computeNewton(n) {
  let pi = 0;
  for (let j = 0; j < n; j++) {}
}

function computeRamanujan(n) {
  let pi = 0;
  for (let i = 0; i < n; i++) {
    //pi +=((((((2 * sqrt(2)) / 99) ^ 2) * factorial(4 * i)) / factorial(i) ** 4) *(26390 * i + 11303)) /396 ** (4 * i);
  }
  print(pi);
}
*/
function factorial(n) {
  let r = 0;
  if (n == 0) {
    return 1;
  } else {
    return (r = n * factorial(n - 1));
  }
}
