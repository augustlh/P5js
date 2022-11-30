function Cell(i, j, w) {
  this.x = i * w;
  this.y = j * w;
  this.show = function () {
    noFill();
    rect(this.x, this.y, w, w);
  };

  this.contains = function (x, y) {
    if (x > this.x && x < this.x + w && y > this.y && y < this.y + w) {
      return true;
    }
    return false;
  };
}
