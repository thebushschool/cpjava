// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com
// Adapted for P5JS by Chandru Narayan
// Bush School
// Example: Two Bubble objects

let myBubble1, myBubble2; // Two bubble objects!
let bubbles = []; // A Bubble Array
let maxBubb = 200;
let maxRad = 30;

function randomColor() {
  return color(random(255), random(255), random(255), random(255));
}

function redColor() {
  return color(random(255), 0, 0, random(255));
}

function greenColor() {
  return color(0, random(255), 0, random(255));
}

function blueColor() {
  return color(0, 0, random(255), random(255));
}

function noColor() {
  return color(0, 0, 0, random(255));
}

function setup() {
  createCanvas(800, 500);
  for (let i = 0, theColor; i < maxBubb; i++) {
    if (i % 4 === 0) theColor = redColor();
    else if (i % 4 === 1) theColor = greenColor();
    else if (i % 4 === 2) theColor = blueColor();
    else theColor = noColor();
    bubbles[i] = new Bubble(theColor, random(5, maxRad), maxRad, maxRad, random(3), random(3));
  }
}

function draw() {
  background(255);
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

function mousePressed() {
  for (i = 0; i < maxBubb; i++) {
    bCol = splitTokens(bubbles[i].c.toString(), '(,');
    if (bCol[1] > 0) { //red color
      bubbles[i].xpos = maxRad;
      bubbles[i].ypos = maxRad;
    } else if (bCol[2] > 0) { //green color
      bubbles[i].xpos = width - maxRad;
      bubbles[i].ypos = maxRad;
    } else if (bCol[3] > 0) { //blue color
      bubbles[i].xpos = width - maxRad;
      bubbles[i].ypos = height - maxRad;
    } else { //no color
      bubbles[i].xpos = maxRad;
      bubbles[i].ypos = height - maxRad;
    }
  }
}