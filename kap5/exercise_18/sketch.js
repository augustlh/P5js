//Betragt listen [7,4,5,6,9,1,2,8,3,10]. Skriv et program,
//der finder det største element i en liste, printer det i
//konsollen og fjerner det fra listen. Gentag denne procedure
//(gerne med en løkke inde i en løkke) indtil listen er tom.
//Brug evt. en eller flere af operationerne push,unshift,pop,shift,slice.
//Hvad har du opnået

let n = [7, 4, 5, 6, 9, 1, 2, 8, 3, 10];
let score = 0;
let n2 = [];

function setup() {
  createCanvas(400, 400);
  //n = n.slice(2 - 1, n.length);
  //print(n);
}

function draw() {
  background(220);
  score = 0;

  for (let i = 0; i < n.length; i++) {
    if (n[i] > n[score]) {
      score = i;
    }
    if ((i = n.length)) {
      print(n[score]);
      n = n.slice(score + 1, n.length);
    }
  }
}
