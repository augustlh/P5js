/*
August Leander Hedman
S2n
Programmering B, P5.js
*/

//de globale variabler erklæres
let d;
let h = 100; //global variabel h tildeles værdien 100
let x, y, z, j, k, l;
let ca, cb, cc;
let speed = 4; //global variabel speed tildeles værdien 100

//læser lydfilerne ind
function preload() {
  cas = loadSound("assets/1.mp3");
  cbs = loadSound("assets/2.mp3");
  ccs = loadSound("assets/3.mp3");
}

//setup funktionen, skaber canvas og tildeler værdier til globale variabler - foregår her, fordi width ikke er ærklæret før setup
function setup() {
  createCanvas(600, 600);
  background(156);
  preload();
  noStroke();
  d = width / 3;
  x = 0;
  y = -d;
  z = d;
  j = height;
  k = d * 2;
  l = -d;
}

//kører hver frame
function draw() {
  background(23);
  animate();
}

//laver en funktion der kan bruges til at tegne en rektangel, som kan bevæge sig
function animate(){
  if (ca === true) { //hvis ca er true, så tegnes rektanglen, og y koordinaten ændres med speed
    rect(x, y, d, d);
    y += speed;
    if (y + (d / 2) * 1.8 >= height) { //dette fungerer som et border-check. Hvis rektanglen når bunden af canvas, så stoppes den
      ca = false; //sætter ca til false, så rektanglen ikke tegnes igen
      y = -d; //sætter y koordinaten tilbage til start
      cas.stop() //stopper lyden
    }
  }
  if (cb === true) {
    rect(z, j, d, d);
    j -= speed;
    if (j + (d / 2) * 0.4 <= 0) {
      cb = false;
      j = height;
      cbs.stop();
    }
  }
  if (cc === true) {
    rect(k, l, d, d);
    l += speed;
    if (l + (d / 2) * 1.8 >= height) {
      cc = false;
      l = -d;
      ccs.stop()
    }
  }
}

//funktion der håndterer keypresses
function keyPressed() {
  if (key === "q" && ca != true) { //hvis q er trykket og ca ikke er true, så sættes ca til true, og lyden afspilles
    fill(255);
    ca = true;
    cas.loop();
  }
  if (key === "w" && cb != true) { //hvis w er trykket og cb ikke er true, så sættes cb til true, og lyden afspilles
    fill(255);
    cb = true;
    cbs.play();
  }
  if (key === "e" && cc != true) { //hvis e er trykket og cc ikke er true, så sættes cc til true, og lyden afspilles
    fill(255);
    cc = true;
    ccs.play();
  }
}
