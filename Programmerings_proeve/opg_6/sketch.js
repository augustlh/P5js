//Opret 2 variabler A og B, tildel ved brug af random() forskellige værdier.
//Udskriv summen af de to variabler til konsollen.

let a;
let b;

function setup() {
  createCanvas(400, 400);
  a = random(0, 100);
  b = random(0, 100);
  print("Sum: " + a + b);
}

function draw() {
  background(220);
}
