let pins = [];
let colors = [];
let maxnum = 50;

function setup() {
  createCanvas(600, 600);
  createPins();
  createColors();
}

function draw() {
  //background(255);
  display();
}

function createPins() {
  for (let i = 0; i < maxnum; i++) { //create a 2D array to hold pin coord
    let x = int(random(0, width));
    let y = int(random(0, height));
    pins[i] = createVector(x, y); //assign vector
  }
}

function display() {
  for (let i = 0; i < maxnum; i++) {
    stroke(colors[i]);
    strokeWeight(3)
    fill(colors[i]);
    ellipse(pins[i].x, pins[i].y, 10, 10)
    if (mouseIsPressed) {
      line(pins[i].x, pins[i].y, mouseX, mouseY);
    }
  }
}

function createColors() {
  for (let i = 0; i < maxnum; i++) {
    colors[i] = randomColor();
  }
}

function randomColor() {
  c = color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  return c;
}