function setup() {
  createCanvas(400, 400);
  let wordcloud = [
    "Javascript",
    "Python",
    "C++",
    "C",
    "C#",
    "Julia",
    "Java",
    "Go",
    "R",
    "Basic",
  ];
  for (let i = 0; i < wordcloud.length; i++) {
    text(wordcloud[i], random(400), random(400));
    i = i + 1;
  }
}

//skriver et ord i en array med random posistion

function draw() {}
