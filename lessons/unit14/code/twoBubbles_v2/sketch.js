// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
// Adapted for P5JS by Chandru Narayan
// Bush School
// Example: Two Bubble objects

let myBubble1, myBubble2; // Two bubble objects!
let rad = 10; // radius of 20 pixels
let dir = 1;
function setup() {
  createCanvas(500, 300);
  myBubble1 = new Bubble(color(0, 255, 0, 50), width/2, height/2, dir, dir, 3, 3); // Parameters go inside the parentheses when the object is constructed.
  myBubble2 = new Bubble(color(0, 0, 255, 50), width/2, height/2, dir, dir, 3, 3);
}

function draw() {
  background(255);
  myBubble1.jitter();
  myBubble1.display();
  myBubble2.move();
  myBubble2.display();
}
/*
class Bubble { // Even though there are multiple objects, we still only need one class. No matter how many cookies we make, only one cookie cutter is needed.Isn’t object-oriented programming swell?
  color c;
  float xpos;
  float ypos;
  float xspd;
*/

function Bubble(tempC, tempXpos, tempYpos, tempXdir, tempYdir, tempXspd, tempYspd) { // The Constructor is defined with arguments.
  this.c = tempC;
  this.xpos = tempXpos;
  this.ypos = tempYpos;
  this.xspd = tempXspd;
  this.yspd = tempYspd;
  this.xdir = tempXdir;
  this.ydir = tempYdir;

  this.display = function() {
    stroke(0);
    fill(this.c);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    ellipse(this.xpos, this.ypos, rad);
  }

  this.move = function() {
    this.xpos += this.xspd * this.xdir;
    this.ypos += this.yspd * this.ydir;

    if (this.xpos > width - rad || this.xpos < rad) {
      this.xdir *= -1;
    }
    if (this.ypos > height - rad || this.ypos < rad) {
      this.ydir *= -1;
    }
  }

  this.jitter = function() {
    this.xpos += random(-this.xspd, this.xspd);
    this.ypos += random(-this.yspd, this.yspd);

    if (this.xpos > width - rad) {
      this.xpos = width;
    } else if (this.ypos > height - rad) {
      this.ypos = 0;
    }
  }
}