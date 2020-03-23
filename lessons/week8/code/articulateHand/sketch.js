var angle = 0.0;
var angleDirection = 1;
var speed = 0.005;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(204);
  translate(100, 25); // Move to start position
  rotate(angle);
  strokeWeight(12);
  line(0, 0, 100, 0);
  translate(100, 0); // Move to next joint
  rotate(angle * 2.0);
  strokeWeight(6);
  line(0, 0, 60, 0);
  translate(60, 0); // Move to next joint
  rotate(angle * 2.5);
  strokeWeight(3);
  line(0, 0, 40, 0);
  angle += speed * angleDirection;
  if ((angle > HALF_PI) || (angle < 0)) {
    angleDirection *= -1;
  }
}