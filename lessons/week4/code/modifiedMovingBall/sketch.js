var x = 100;
var y = 75;
var dia = 75;
var rad = dia/2;

function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {
  background(255);
  var d = dist(mouseX, mouseY, x, y);
  if (d < rad) {
    fill(255, 0, 0);
  } else {
    fill(0, 255, 0);
  }
  
  ellipse(x, y, dia, dia);
  
  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      y = max(rad, y - 10);
    } else if (keyCode == DOWN_ARROW) {
      y = min(y + 10, width-rad);
    } else if (keyCode == RIGHT_ARROW) {
      x = min(x + 10, width-rad);
    } else if (keyCode == LEFT_ARROW) {
      x = max(rad, x - 10);
    }
  }
}