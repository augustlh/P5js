//Lav en løkke, der tilføje de lige tal i en liste og de ulige tal i en anden liste.
//Skriv de lige tal tilfældige steder i højre side af kanvas og de ulige tal, tilfældige steder, i venstre side af kanvas.

let even = [];
let odd = [];

let scale;
size = 10;

function setup() {
  createCanvas(800, 800);
  background(220);
  scale = height / 99;
  textSize(size);

  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0 && i != 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }

  for (let i = 0; i < 100; i++) {
    text(even[i], width / 2 + 250, i * scale + size);
    text(odd[i], width / 2 - 250, i * scale + size);
  }
}

function draw() {}
