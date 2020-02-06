var x = 25;
var dir = 1;
var speed = 5;

function setup() {
  createCanvas(300, 200);
  background(120, 200, 255);
}

function draw() {
  background(120, 200, 255);
  noStroke();
  //  fill(255, 0, 0);
  ellipse(x, 100, 50, 50);
  if (x > 275 || x < 25) {
    dir = dir * -1;
    fill(random(0, 255), random(0, 255), random(0, 255))
  }
  x = x + speed * dir;
}