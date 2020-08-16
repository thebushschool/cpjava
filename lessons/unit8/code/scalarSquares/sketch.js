function setup() {
  createCanvas(600, 400);
  background(204);
}

function draw() {
  translate(mouseX, mouseY);
  var scalar = mouseX / 60.0;
  scale(scalar);
  strokeWeight(1 / scalar);
  rect(-15, -15, 30, 30);
  translate(35, 10);
  rect(-15, -15, 15, 15);
}