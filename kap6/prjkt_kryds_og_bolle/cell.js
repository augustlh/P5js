let circles = [];
let winnerArr = [];

function Cell(i, j, w) {
  this.x = i * w;
  this.y = j * w;
  this.circle = false;
  this.square = false;

  this.show = function () {
    noFill();
    rect(this.x, this.y, w, w);
    if (this.circle == true) {
      push();
      strokeWeight(6);
      circle(this.x + w / 2, this.y + w / 2, w / 2);
      pop();
    } else if (this.square) {
      push();
      strokeWeight(6);
      line(this.x + 10, this.y + 10, this.x + w - 10, this.y + w - 10);
      line(this.x + w - 10, this.y + 10, this.x + 10, this.y + w - 10);
      pop();
    }

    if(winnerArr.length > 0){
      push()
      strokeWeight(6)
      stroke(0, 100, 0)
      line(winnerArr[0].x, winnerArr[0].y, winnerArr[1].x + w /2, winnerArr[1].y)
      pop()
    }

  };

  this.winner = function () {
    this.horizontal();
    this.vertical();
    this.diagonal();
  };

  this.horizontal = function () {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if(grid[i][1].circle == true && grid[i][1-1].circle == true && grid[i][1+1].circle == true || grid[i][1].square == true && grid[i][1-1].square == true && grid[i][1+1].square == true){
          if(winnerArr.length == 0){
            winnerArr.push(createVector(grid[i][0].x+w/2, grid[i][0].y))
            winnerArr.push(createVector(grid[i][2].x, grid[i][2].y+w))
            turn = "HEJ";
            print(winnerArr);
          } 
        }
      }
    }
  };

  this.vertical = function () {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if(grid[1][j].circle == true && grid[1-1][j].circle == true && grid[1+1][j].circle == true || grid[1][j].square == true && grid[1-1][j].square == true && grid[1+1][j].square == true){
          if(winnerArr.length == 0){
            winnerArr.push(createVector(grid[0][j].x, grid[0][j].y+w/2))
            winnerArr.push(createVector(grid[2][j].x+w/2, grid[2][j].y+w/2))
            turn = "HEJ";
            print(winnerArr);
          }
        }
      }
    }
  };


  this.diagonal = function () {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        if(grid[1][1].circle == true && grid[1-1][1-1].circle == true && grid[1+1][1+1].circle == true || grid[1][1].square == true && grid[1-1][1-1].square == true && grid[1+1][1+1].square == true){
          if(winnerArr.length == 0){
            winnerArr.push(createVector(grid[0][j].x, grid[0][j].y))
            winnerArr.push(createVector(grid[2][j].x+w/2, grid[2][j].y+w*3))
            turn = "HEJ";
            print(winnerArr);
          }
        }else if(grid[1][1].circle == true && grid[0][2].circle == true && grid[2][0].circle == true || grid[1][1].square == true && grid[0][2].square == true && grid[2][0].square == true ){
          if(winnerArr.length == 0){
            winnerArr.push(createVector(grid[0][j].x, grid[0][j].y+w*3))
            winnerArr.push(createVector(grid[2][j].x+w/2, grid[2][j].y))
            turn = "HEJ";
            print(winnerArr);
          }
        }
      }
    }
  };
  this.contains = function (x, y) {
    if (x > this.x && x < this.x + w && y > this.y && y < this.y + w) {
      return true;
    }
    return false;
  };

  this.draw = function (shape) {
    if (shape == "CIRCLE") {
      this.circle = true;
    }
    if (shape == "CROSS") {
      this.square = true;
    }
  };

  this.clear = function () {
    this.circle = false;
    this.square = false;
    while(winnerArr.length > 0){
      winnerArr.pop();
    }
    turn = "CROSS";
    print("cleared");
  };
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
