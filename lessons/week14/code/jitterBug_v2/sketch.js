let bug = []; // A pointer to the Object
let maxBugs = 10;
let dia = 20; // size of bug

function setup() {
  createCanvas(480, 120);
  for (i = 0; i < maxBugs; i++) {
    // Create object and pass in parameters
    bug[i] = new JitterBug(random(width), random(height), dia, color(255)); // Call to Construct the JitterBug object
  }
}

function draw() {
  background(204);
  for (i = 0; i < maxBugs; i++) {
    bug[i].jitter();
    bug[i].display();
  }
}

function JitterBug(posx, posy, dia, color) { // Define the Constructor for JitterBug
  this.posx = posx; // Four properties are defined here
  this.posy = posy;
  this.dia = dia;
  this.speed = 2.5;
  this.color = color;

  this.jitter = function() {
    this.posx += random(-this.speed, this.speed);
    this.posy += random(-this.speed, this.speed);
  }

  this.kill = function() {
    this.color = "red";
    this.speed = 0;
  }

  this.display = function() {
    fill(this.color);
    ellipse(this.posx, this.posy, this.dia, this.dia);
  }
}

function mousePressed() {
  for (i = 0; i < maxBugs; i++) {
    d = dist(mouseX, mouseY, bug[i].posx, bug[i].posy)
    if (d <= dia) {
      bug[i].kill();
    }
  }
}