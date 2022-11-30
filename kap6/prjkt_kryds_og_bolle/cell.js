let circles = [];

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

  this.winner = function () {};

  this.clear = function () {
    this.circle = false;
    this.square = false;
    print("cleared");
  };
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
