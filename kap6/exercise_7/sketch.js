let word = "aben";
let guess;
wrongGuesses = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  guess = "";
  guess = prompt("Guess a letter");
  if (includes(guess)) {
    print("Correct");
  } else {
    wrongGuesses++;
    drawHang(wrongGuesses);
  }
}

function drawHang(i) {
  
  if (wrongGuesses == 1) {
    circle(width / 2, height / 2, 40);
  } else if (wrongGuesses == 2) {
    line(width / 2, height / 2 + 25, width / 2, height / 2 + 50);
  } else if (wrongGuesses == 3) {
    line(width / 2, height / 2 + 50, width / 2 - 25, height / 2 + 75);
  } else if (wrongGuesses == 4) {
    line(width / 2, height / 2 + 50, width / 2 + 25, height / 2 + 75);
  } else if (wrongGuesses == 5) {
    line(width / 2, height / 2 + 25, width / 2 - 25, height / 2 + 50);
  } else if (wrongGuesses == 6) {
    line(width / 2, height / 2 + 25, width / 2 + 25, height / 2 + 50);
  }
}

function includes(words) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == words) {
      return true;
    }
  }
  return false;
}
