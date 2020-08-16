let angle = 0;
let len = 200;
let red = 0.66
let slider;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  stroke(0);
  slider = createSlider(0, 180, 45, 0.01);
}

function draw() {
  background(255);
  angle = slider.value();
  stroke(0);
  translate(width / 2, height);
  branch(len);
}

function branch(len) {
  sw = map(len, 0, 200, 1, 4);
  strokeWeight(sw);
  line(0, 0, 0, -len);
  translate(0, -len);
  len *= red;
  if (len > 4) {
    push();        //rt branch
    rotate(angle);
    branch(len);
    pop();

    push();        //lt branch
    rotate(-angle);
    branch(len);
    pop();
  }
}