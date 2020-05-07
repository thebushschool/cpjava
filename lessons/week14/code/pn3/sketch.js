var xoff1 = 0;
var xoff2 = 10000;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);

  for (var x = 0; x<width; x++) {
    stroke(255);
    point(x, random(height));
  }
  
  noLoop();
}