// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
// Adapted for P5JS by Chandru Narayan
// Bush School
// Example: Two Bubble objects

let myBubble1, myBubble2; // Two bubble objects!
let bubbles = [];  // A Bubble Array
let maxBubb = 50;

function randomColor() {
  return color(random(255),random(255),random(255),random(255));
}

function setup() {
  createCanvas(500, 300);
  myRedBubble = new Bubble(color("red"), 10, width / 2, height / 2, 3, 3); // Parameters go inside the parentheses when the object is constructed.
  for (i = 0; i < maxBubb; i++) {
    bubbles[i] = new Bubble(randomColor(), random(20), random(255), random(255), random(10), random(10));
  }
}

function draw() {
  background(255);
  myRedBubble.jitter();
  myRedBubble.display();
  for (i = 0; i < maxBubb; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function Bubble(tempC, tempRad, tempXpos, tempYpos, tempXspd, tempYspd) { // The Constructor is defined with arguments.
  this.c = tempC;
  this.rad = tempRad;
  this.xpos = tempXpos;
  this.ypos = tempYpos;
  this.xspd = tempXspd;
  this.yspd = tempYspd;
  this.xdir = 1;
  this.ydir = 1;

  this.display = function() {
    stroke(0);
    fill(this.c);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(this.xpos, this.ypos, this.rad);
  }

  this.move = function() {
    this.xpos += this.xspd * this.xdir;
    this.ypos += this.yspd * this.ydir;

    if (this.xpos > width - this.rad || this.xpos < this.rad) {
      this.xdir *= -1;
    }
    if (this.ypos > height - this.rad || this.ypos < this.rad) {
      this.ydir *= -1;
    }
  }

  this.jitter = function() {
    this.xpos += random(-this.xspd, this.xspd);
    this.ypos += random(-this.yspd, this.yspd);

    if (this.xpos > width - this.rad) {
      this.xpos = width;
    } else if (this.ypos > height - this.rad) {
      this.ypos = 0;
    }
  }
}