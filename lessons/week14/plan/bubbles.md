## Create P5JS objects and manipulate them individually

### What is a P5JS Object?
* It is data structure that simulates a real life object 
* It has one or many properties or attributes
* It has one or many behaviour or activity
* You can "construct" many instances of the same object

### An example object
* An example might be that you can create a "Bug"
* The bug is circular in shape
    * This fact will be used to "construct" the bug using an ellipse command
* The bug has five "properties"
    1. It has a position X
    1. It has a position Y
    1. It has a diameter
    1. It has a color
    1. It has a speed at which it jitters

* The bug has three "behaviors"
    1. It jitters when created
    1. It displays itself on the canvas
    1. It dies (stops jittering) and changes color to red when you click it
    
    

### Let us create the bug!
````
let bug;

function setup() {
  createCanvas(480, 120);
  background(204);
  // Create object and pass in parameters
  bug = new JitterBug(width/2, height/2, 20);
}

function draw() {
  background(150);
  bug.move();
  bug.display();
}

function JitterBug(xpos, ypos, dia) {
  this.xpos = xpos;
  this.ypos = ypos;
  this.dia = dia;
  this.speed = 2.5;
  
  this.move = function() {
    this.xpos += random(-this.speed, this.speed);
    this.ypos += random(-this.speed, this.speed);
  }
  
  this.display = function() {
    ellipse(this.xpos, this.ypos, this.dia, this.dia);
  }
}
````



