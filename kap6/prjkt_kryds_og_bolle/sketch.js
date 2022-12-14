let rows = 3;
let columns = 3;
let grid;
let w;
let turn = 'CROSS';

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
  background(255);
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].winner();  
      grid[i][j].show();  
    }
  }
}

function mousePressed() {
  if (mouseButton == LEFT && turn == 'CIRCLE') {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j].contains(mouseX, mouseY)) {
          if (grid[i][j].square == false && grid[i][j].circle == false) {
            grid[i][j].draw("CIRCLE");
            turn = 'CROSS';
          }
        }
      }
    }
  }
  if (mouseButton == RIGHT && turn == 'CROSS') {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j].contains(mouseX, mouseY)) {
          grid[i][j].draw("CROSS");
          turn = 'CIRCLE';
        }
      }
    }
  }
}

function keyPressed() {
  if (keyCode == 69) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j].clear();
      }
    }
  }
}
