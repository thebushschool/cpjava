var x = 250;
var y = 250;
var w = 50;
var rc = 20;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  fill(rc,0,0);
  ellipse(x, y, w, w);
  distance = dist(x, y, mouseX, mouseY);
  if (distance < w / 2) {
    w += 1; 
    rc += 1;
  } else {
    w = 50;  
  }
}