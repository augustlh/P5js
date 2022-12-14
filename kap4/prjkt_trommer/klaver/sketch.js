/*
August Leander Hedman
S2n
Programmering B, P5.js
*/

//erklæring af globale variabler, og tildeling til enkele af dem
let d = 40;
let h = 100;
let fD = 20;
let fH = 50;
let letr;
let key;
let x = d - d / 4;
let song;
//erklæring af arrayet binds, som er tildelt string værdierne til de knapper, der skal afspille lyde
var binds = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
];

// setup funktionen kører en gang når programmet starter
function setup() {
  createCanvas(360, 400);
  background(156);
  frameRate(20);
}

function draw() {
  //for loop der tegner rektanglerne
  for (i = 0; i <= width / 40; i++) {
    fill(255, 255, 255);
    //hvis binds[i] er lig med key, så skal rektanglen være rød, fordi man har trykket på den - denne metode er dog knap så god at anvende, da den afhænger af frameraten.
    //hvis frameRaten er for høj, så ses key response ikke på skærmen
    if (binds[i] == key) {
      fill(169, 169, 169);
      key = '';
    }
    rect(i * d, height / 2 - d, d, h);
    fill(0, 0, 0);
    text(binds[i], i * d + 15, height / 2 + 50);
    fill(255, 255, 255);
  }

  //for loop der tegner de sorte keys
  for (l = 1; l <= 8; l++) {
    fill(0, 0, 0);
    rect(d * l - d / 4, height / 2 - h + 60, fD, fH);
    fill(255, 255, 255);
    text(binds[l + 8], d * l - 4, height / 2 - h + 90);
    fill(0, 0, 0);
  }
}

function keyPressed() {
  //console.log('assets/node' + event.key + '.mp3');
  if (binds.includes("" + event.key)) {
    //hvis den er i arrayet, tildeler den song en ny p5.sound, afhængig af hvilken knap der er trykket på
    song = new Audio("media/node" + event.key + ".mp3");
    //spiller lyden
    song.play();
    key = "" + event.key;
  }
}
