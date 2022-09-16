var x = 200; //Der ærkleres den globale variable x og den tildeles værdien 200
var y = 200; //Der ærkleres den globale variable y og den tildeles værdien 200
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220); //Tegner baggrunden med farven 220
  fill(0); //Sætter fill til sort
  ellipse(x,y,50,50);   //Tegner en ellipse ved x,y med størrelsen 50 50
  if (x >= 400){ //Tjekker om variablen x's værdi er over eller lig 400
   x = 0;  //x tildeles værdien 0, hvis x >= 400
  }
  if (keyCode === UP_ARROW) { //Tjekker om man trykker på UP_ARROW
    y = y - 1; //variablen y dekrementeres
  } else if (keyCode === DOWN_ARROW) { //Tjekker om man trykker på DOWN_ARROW
   y = y + 1; //variablen y inkrementeres
  }
  if (keyCode === LEFT_ARROW) { //Tjekker om man trykker på DOWN_ARROW
    x = x - 1; //variablen x dekrementeres
  } else if (keyCode === RIGHT_ARROW) { //Tjekker om man trykker på RIGHT_ARROW
    x = x + 1; //værdien x inkrementeres
  }
}

//Idet programmet kører hvert frame, bliver ellipsens koordinater opdateret,
//hvilket får den til at bevæge sig-