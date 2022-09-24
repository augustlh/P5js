/*
August Leander Hedman
S2n
Programmering B, P5.js
*/
//de globale variabler erklæres
let d = 100;
let x = 0 + d / 2;
let letr;
let song;
let key;
//arrayet binds erklæres og tildeles værdier, som repræsenterer tilladte keypresses
var binds = ['q', 'w','e', 'r'];

//kører en gang, når programmet starter
function setup() {
  createCanvas(400, 400);
  background(120, 23, 23);
  frameRate(20);

  //for loop til at tegne cirklerne. Er defineret, så der tegnes så mange cirkler, som der er plads til på canvasset
  for (i = 0; i <= width / 2; i++) {
    circle(x, height / 2, d);
    //angiver hvilket bogstav der skal stå i cirklen, på baggrund af arrayet og variablen i
    letr = "" + binds[i];
    //tegner teksten
    text(letr, x - 5, height / 2 + 5);
    //x ikrementeres med d, for at gøre plads til næste cirkel , så de ikke overlapper
    x += d;
  }
}

function draw() {}

//funktion der håndterer keypresses
function keyPressed() {
  //tjekker om knappen der er trykket på er i binds arrayet
  if (binds.includes("" + event.key)) {
    //hvis den er i arrayet, tildeler den song variablen en ny p5.sound, afhængig af hvilken knap der er trykket på
    song = new Audio("assets/node" + event.key + ".mp3");
    //spiller lyden
    song.play();
  }
}
