// 400 × 320
var cat;
var catWidth = 400;
var aspectRatio = 320 / 400;

function preload() {
  cat = loadImage("kitty.png");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {

}

function mousePressed() {
  background(255);
  image(cat, mouseX, mouseY, catWidth, catWidth * aspectRatio);
}
