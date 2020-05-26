// An array of "Animation" objects
let animations = [];


// The image sequence will be loaded outside of the object
// We don't want multiple instances of an object
// to load images again and again, just to point to an array
// of pre-loaded images

let ima = []; // array for images
let nimgs = 40;
let nobjs = 6;

function preload() {
  for (i = 0; i < nimgs; i++) {
    imageName = "stickman/stick" + nf(i + 1, 2) + ".png"; // setup image name to load
    //print(imageName);
    ima[i] = loadImage(imageName); // load image into array
  }
}

function setup() {
  createCanvas(640, 360);
  let resetB = createButton("restart race");
  resetB.mousePressed(startRace);
  frameRate(30);
  // Start the race
  startRace();
}

function startRace() {
  // Make all the objects
  let y = 0;
  for (let i = 0; i < nobjs; i++) {
    // Each object gets an image array and an x,y location
    animations[i] = new Animation(ima, 0, y);
    y += ima[i].height;
  }
}

function draw() {

  background(255);

  // Display, cycle, and move all the animation objects
  for (let i = 0; i < nobjs; i++) {
    animations[i].display();
    animations[i].next();
    animations[i].move();
  }
}