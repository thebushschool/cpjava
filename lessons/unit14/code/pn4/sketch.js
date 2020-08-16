var xoff = 0;
var inc = 0.02
var start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  stroke(255);
  noFill();
  beginShape();
  xoff = start;
  for (var x = 0; x<width; x++) {
    stroke(255);
    var y = noise(xoff) * height;
    vertex(x, y);
    
    xoff += inc;
  }
  start += inc;
  endShape();
  //noLoop();
}