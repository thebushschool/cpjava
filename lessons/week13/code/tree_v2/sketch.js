let count = 10;
let len = 200;
let red = 0.65;
let angle = 45;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  //background(255);
  createCanvas(800, 600);
  translate(width / 2, height);
  angle = map(mouseX, 0, width, 0, 60);
  branch(len);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  len *= red;
  count--;
  if (len > 4) {
    push();
    rotate(angle);
    //line(0, 0, 0, -len);
    branch(len)
    pop();
    push();
    rotate(-angle);
    //line(0, 0, 0, -len);
    branch(len);
    pop();
  }
}