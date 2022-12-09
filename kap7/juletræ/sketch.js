let stamme, gran, star;
let kugler = [];
let colors = ["red","green","blue","yellow","orange","purple","pink","black","white","grey"]

function setup() {
  createCanvas(400, 400);
  stamme = new Stamme(200,300,20);
  gran = new Gran(200-40,300,100);
  star = new Star(200+10.5,295-100,20);
  for(let i = 0; i < 5; i++){
    kugler[i] = new Kugler(random(180,200),random(200,300),10);
  }
}

function draw() {
  background(220);
  stamme.show();
  gran.show();
  for(let i = 0; i < kugler.length; i++){
    //kugler[i].update(colors[int(random(0,colors.length))]);
    let color = colors[int(random(0,colors.length))]
    kugler[i].show();
    kugler[i].update(color);
  }
  star.show();
}

//kke nødvendigvis at bruge class
class Stamme{
  constructor(x,y,w){
    this.x = x; 
    this.y = y;
    this.w = w;
  }

  show(){
    push();
    fill(100,50,0);
    rect(this.x,this.y,this.w,this.w*2);
    pop();
  }

}

class Gran{
  constructor(x,y,h){
    this.x = x; 
    this.y = y;
    this.h = h;
  }

  show(){
    push();
    fill(0,255,0);
    triangle(this.x,this.y,this.x+this.h,this.y,this.x+this.h/2,this.y-this.h);
    pop();
  }

}

class Kugler{
  constructor(x,y,r){
    this.x = x; 
    this.y = y;
    this.r = r;
  }

  show(){
    push();
    circle(this.x,this.y,this.r);
    pop();
  }

  update(colors){
    fill(colors);
  }

}

class Star{
  constructor(x,y,r){
    this.x = x; 
    this.y = y;
    this.radius = r;
  }

  show(){
    //draw a star
    push();
    fill(255,255,0);
    beginShape();
    for (let a = 0; a < TWO_PI; a += PI / 2.5) {
      let sx = this.x + cos(a) * this.radius;
      let sy = this.y + sin(a) * this.radius;
      vertex(sx, sy);
      sx = this.x + cos(a + PI / 5) * this.radius / 3;
      sy = this.y + sin(a + PI / 5) * this.radius / 3;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }


}