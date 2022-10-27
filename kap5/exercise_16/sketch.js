//Lav en liste med 10 selvvalgte navne. Lav en ordsky på kanvas af navnene. Jo flere karakterer et navn består af, jo større skrift skal teksten være.

let navne = [
  "August",
  "David",
  "Snaske",
  "Gevussy",
  "Sebussy",
  "Timussy",
  "Peter",
  "Rikkemanden",
  "Peterpan",
  "titalsmanden",
];
let scale = 2;
let size = 0;

function setup() {
  createCanvas(400, 400);
  background(220);

  for (let i = 0; i < navne.length; i++) {
    size = navne[i].length / scale;
    print(size + " + " + navne[i]);
    textSize(int(size * scale ** 3));
    text(
      "" + navne[i],
      random(0 + size * scale ** 3, width - size * scale ** 3),
      random(0 + size * scale ** 3, height - size * scale ** 3)
    );
  }
}
