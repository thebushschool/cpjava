var xoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  var x = random(width);

  var x = noise(xoff)*width;
  
  xoff += 0.01;
  
  fill("red");
  ellipse(x, 200, 20, 20);
}