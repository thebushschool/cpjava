var radius = 40;
var x = -radius;
var speed = 3;
var direction = 1;

function setup() {
  createCanvas(400, 200);
  ellipseMode(RADIUS);
}

function draw() {
  background('#f5bf42');
  fill('#42c5f5')
  if (!mouseIsPressed) {
    x += speed; // Increase the value of x
    if (x > width + radius) { // If the shape is off screen
      x = -radius; // move to the left edge
    }
    arc(x, 60, radius, radius, 0.52, 5.76);
  } else {
    x += speed * direction; // Increase the value of x in the proper direction
    if ((x > width - radius) || (x < radius)) { //if shape is on edges of canvas
      direction = -direction; // Flip direction
    }
    if (direction == 1) {
      arc(x, 60, radius, radius, 0.52, 5.76); // Face right
    } else {
      arc(x, 60, radius, radius, 3.67, 8.9); // Face left
    }
  }
}