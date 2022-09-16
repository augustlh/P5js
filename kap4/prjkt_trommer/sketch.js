//dekleration af globale variabler
let d = 100;
let x = 0+d/2;
let letr;
let song;
//deklaration af arrayet binds, som angiver, hvilke knapper, der afspiller lyde
var binds = ['q','w','e','r'];

function setup() {
  createCanvas(400, 400);
  background(120,23,23);

}

function draw() {
  //for loop til at tegne cirklerne. Er defineret, så der tegnes så mange cirkler, som der er plads til på canvasset
  for(i = 0; i <= width/2;i++){
    circle(x,height/2,d);
    //angiver hvilket bogstav der skal stå i cirklen, på baggrund af arrayet og variablen i
    letr = '' + binds[i];
    //tegner teksten
    text(letr,x-5,height/2+5);
    //x ikrementeres med d, for at gøre plads til næste cirkel , så de ikke overlapper
    x += d;
  }
}

//boolean function
function keyPressed(){
  //tjekker om knappen der er trykket på er i binds arrayet
  if(binds.includes('' + event.key)){
    //console.log('assets/node' + event.key + '.mp3');
    //hvis den er i arrayet, definerer den song variablen som en ny p5.sound, afhængig af hvilken knap der er trykket på
    song = new Audio('assets/node' + event.key + '.mp3');
    //spiller lyden
    song.play();
  }
}

