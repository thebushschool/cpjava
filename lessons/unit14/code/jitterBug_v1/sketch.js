let bug;

function setup() {
  createCanvas(480, 120);
  background(204);
  // Create object and pass in parameters
  bug = new JitterBug(width/2, height/2, 20);
}

function draw() {
  background(150);
  bug.move();
  bug.display();
}

function JitterBug(xpos, ypos, dia) {
  this.xpos = xpos;
  this.ypos = ypos;
  this.dia = dia;
  this.speed = 2.5;
  
  this.move = function() {
    this.xpos += random(-this.speed, this.speed);
    this.ypos += random(-this.speed, this.speed);
  }
  
  this.display = function() {
    ellipse(this.xpos, this.ypos, this.dia, this.dia);
  }
}