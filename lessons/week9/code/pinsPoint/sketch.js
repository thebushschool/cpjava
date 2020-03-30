let pins = [];
let maxnum = 200;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < maxnum; i++) { //create a 2D array to hold pin coord
    let x = int(random(0, width));
    let y = int(random(0, height));
    pins[i] = createVector(x, y); //assign vector
  }
}

function draw() {
  background(204);
  for (let i = 0; i < maxnum; i++) {
    line(pins[i].x, pins[i].y, mouseX, mouseY);
  }
}