function setup() {
  createCanvas(400, 400);
  weight = prompt("Enter your weight in kg");
  height = prompt("Enter your height in cm");
  age = prompt("Enter your age");
  sex = prompt("Enter your sex (m/f)");

  print(calcBMI(weight, height));
  print(calcBMR(weight, height, age, sex));
}

function draw() {
  background(220);
}

function calcBMI(vægt, højde) {
  let bmi = vægt / (højde * højde);
  return bmi;
}

function calcBMR(vægt, højde, alder, køn) {
  let bmr = 0;
  if (køn == "m") {
    bmr = 66 + 13.7 * vægt + 5 * højde - 6.8 * alder;
  } else {
    bmr = 655 + 9.6 * vægt + 1.8 * højde - 4.7 * alder;
  }
  return bmr;
}
