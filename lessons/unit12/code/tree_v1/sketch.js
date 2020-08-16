function setup() {
  createCanvas(800, 600);
}

function draw() {
  //background(255);
  translate(width/2, height);
  line(0, 0, 0, -200);
  translate(0, -200);
  push();
  rotate(45);
  line(0, 0, 0, -200);
  pop();
  rotate(-45);
  line(0, 0, 0, -200);
}

