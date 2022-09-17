let d = 40;
let h = 100;
let fD = 20;
let fH = 50
let letr;
let key;
let x = d-d/4;
let song;
var binds = ['q','w','e','r','t','y','u','i','o','1','2','3','4','5','6','7','8'];

function setup() {
  createCanvas(360, 400);
  background(156);

}

function draw() {
  for(i = 0; i <= width/40; i++){
      fill(255,255,255);
      if(binds[i] == key){
        fill(255,0,0);
      }
      rect(i*d, height/2-d, d, h);
      fill(0,0,0);
      text(binds[i], i*d+15, height/2+50);
      fill(255,255,255);
  }

  for(l = 1; l <= 8; l++){ 
      fill(0,0,0);
      rect(d*l-d/4,height/2-h+60, fD, fH);
      fill(255,255,255);
      text(binds[l+8], d*l-4, height/2-h+90);
      fill(0,0,0);
  }
}

function keyPressed(){
    //console.log('assets/node' + event.key + '.mp3');
    //hvis den er i arrayet, definerer den song variablen som en ny p5.sound, afhængig af hvilken knap der er trykket på
    song = new Audio('media/node' + event.key + '.mp3');
    //spiller lyden
    song.play();
    key = '' + event.key;
}

