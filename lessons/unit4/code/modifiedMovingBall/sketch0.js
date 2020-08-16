var x = 100;
var y = 75;

function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {
  background(255);
  fill(0, 255, 0);
  ellipse(x, y, 150, 150);
  
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x +=10;
    } else if (keyCode == LEFT_ARROW) {
      x -= 10;
    }
  }
}