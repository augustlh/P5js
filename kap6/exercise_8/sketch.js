function setup() {
  createCanvas(400, 400);
  l = prompt("Enter a number");
  fibonacciNumbers(l);
}

function draw() {}

function fibonacciNumbers(n) {
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i < n; i++) {
    print(a);
    c = a + b;
    a = b;
    b = c;
  }
}
