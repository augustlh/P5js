/*
August Leander Hedman
S2n
Programmering B, P5.js
*/

// erklæring af globale variabler
let x,y,a,b,speed,d;
let cX,cY;
let cD = 75; //cD tildeles værdien 75
let cA = 2; //cA tildeles værdien 2
let rX, rY, eX,eY;


// setup funktionen kører en gang når programmet starter
function setup() {
  createCanvas(400, 400);
  frameRate(60);
  d = 40;
  x = random(0+d,width-d);
  y = random(0+d,height-d);
  speed = 7;
  a = speed;
  b = 0;
  cX = 0;
  cY = 0;
  strokeWeight(5)
}

//functionen kører hvert frame
function draw() {
  background(121,66,234);
  collision(); 
  circle(x,y,d); //den første cirkel
  circle(cX,cY,cD); //den anden cirkel
  checkBoundaries();; //kører funktionen checkBoundaries
  x += a; 
  y += b;

  mouseChase();
}

//funktion der opdaterer den anden cirkel (musens) position
function mouseChase(){
  rX = x - cX;
  rY = y - cY;

  eX =(1/sqrt((rX)**2+(rY)**2))*rX;
  eY = (1/sqrt((rX)**2+(rY)**2))*rY;

  cX += cA * eX;
  cY += cA * eY;
}

//funktion der håndterer collision
function collision(){
  //hvis afstanden mellem de to centerpoints af hver cirkel er mindre end deres radier adderet har de kollideret
  //beregnes ved afstandsformlen
  if(dist(x,y,cX,cY ) < d/2 + cD/2){
    a = 0;
    b = 0;
    cA = 0;
    //console.log('You got hit!')
  }
}

//funktion der håndterer kollision med kanvassets grænser
function checkBoundaries(){
  if(x + d/2 >= width){ //d/2 repræsenterer radius af cirklen
      a *= -1;
      b=0;
  } if(x - d/2 <= 0){
    a *= -1;
    b=0;
  }
  if(y + d/2 >= height){
    b = -speed;
    a = 0;
  }
  if(y - d/2 <= 0){
    b = speed;
    a = 0;
  }
}

//Denne funktion hånderer keypresses
function keyPressed(){
  if(key === 'w'){
    b = -speed;
    a = 0;
  }
  if(key === 's'){
    b = speed;
    a = 0;
  }
  if(key === 'd'){
    a = speed;
    b = 0;
  }
  if(key === 'a'){
    a = -speed;
    b = 0;
  }
}

