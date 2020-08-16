// INITIAL
var cat;
function preload() {
  cat = loadImage("kitty.png");
}
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(255);
  image(cat, 0, 0, 300, 400);
}