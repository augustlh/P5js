function setup() { 
  createCanvas(600, 400);
} 


//Funktionen tegner en rød firkant i 1, 2 eller 3 kollone alt efter hvor henne musen befinder sig, hvilket tjekkes med mouseX < width/3 etc...
// width og height er de parametre vi giver, når vi skaber canvasset, dvs. width = 600, height = 400.
function draw() { 
  background(220);
  fill(255,0,0);
  noStroke();
  if (mouseX < width/3) {
    rect(0, 0, width/3, height);
  }
  else if (mouseX <= width*2/3) {
    rect(width/3, 0, width/3, height);
  }
  else {
    rect(width*2/3, 0, width/3, height);
  }
}