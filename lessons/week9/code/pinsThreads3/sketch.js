//PINS THREADS3 CODE EXTRACT
let pins = [];
let colors = [];
let maxnum = 10;
let pinSize = 15;

function setup() {
  createCanvas(500, 400);
  createPins();
  createColors();
}

function draw() {
  background(255);
  show_display();
}

function createPins() {
  for (let i = 0; i < maxnum; i++) { //create a 2D array to hold pin coord
    let x = int(random(pinSize / 2, width - pinSize / 2));
    let y = int(random(pinSize / 2, height - pinSize / 2));
    pins[i] = createVector(x, y);
  }
}

function createColors() {
  for (let i = 0; i < maxnum; i++) { //create a 4D array of colors to hold rgba values
    let r = int(random(0, 255));
    let g = int(random(0, 255));
    let b = int(random(0, 255));
    let a = int(random(0, 255));
    colors[i] = color(r, g, b, a); //assign color vector
  }
}

function show_display() {
  for (let i = 0; i < maxnum; i++) {
    fill(colors[i]);
    stroke(colors[i]);
    strokeWeight(3);
    ellipse(pins[i].x, pins[i].y, pinSize, pinSize);
    if (mouseIsPressed) {
      line(pins[i].x, pins[i].y, mouseX, mouseY);
    }
  }
}

function keyReleased() {
if (key == 's' || key == 'S') saveCanvas('mycanvas', 'png');
}
