let rows = 3;
let columns = 3;
let grid;
let w;

function makeArray(col, rows) {
  var arr = new Array(col);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(300, 300);
  w = width / rows;
  grid = makeArray(columns, rows);

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}

function mousePressed() {
  if (mouseButton == LEFT)
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j].contains(mouseX, mouseY)) {
          circle(grid[i][j].x, grid[i][j].y, 20);
        }
      }
    }
}
