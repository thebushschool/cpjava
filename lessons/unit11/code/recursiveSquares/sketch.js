let side = 200;
let detail = 20;
let hue = 50;

function getRandomColor(alpha) {
  return color(random(255),random(255),random(255),alpha);
}

function drawSquare(x, y, side) {
  fill(getRandomColor(hue));
  rect(x, y, side, side);
  if (side > detail) {
    drawSquare(x + side / 2, y, side / 2);
    drawSquare(x - side / 2, y, side / 2);
    drawSquare(x, y + side / 2, side / 2);
    //drawCircle(x, y - side / 2, side / 2);
  }
}

function setup() {
  createCanvas(600, 600);
  background(220);
  noFill();
  rectMode(CENTER);
  drawSquare(width / 2, height / 2, side);
}

function draw() {

}