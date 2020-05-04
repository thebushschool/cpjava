[_Bush School IDMD Spring Semester 2020_](https://chandrunarayan.github.io/idmd/)
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
### Let's update to multiple bugs using an array
````
let bug = []; // A pointer to the array of Bug Objects
let maxBugs = 10;
let dia = 20; // size of bug

function setup() {
  createCanvas(480, 120);
  for (i = 0; i < maxBugs; i++) {
    // Create object and pass in parameters
    bug[i] = new JitterBug(random(width), random(height), dia); // Call to Construct the JitterBug object
  }
}

//
//  Can you update the rest of the code from before for an array of bugs?
//
````
### Let's add the kill() method to the JitterBug Constructor stop the bug from jittering
````
function JitterBug(posx, posy, dia) { // Define the Constructor for JitterBug
  this.posx = posx; // Four properties are defined here
  this.posy = posy;
  this.dia = dia;
  this.speed = 2.5;

  this.jitter = function() {
    this.posx += random(-this.speed, this.speed);
    this.posy += random(-this.speed, this.speed);
  }

  this.kill = function() {
    this.speed = 0;
  }
// .....  

//
//  Can you update the rest of the code for changing the color of the Bug?
//
````

### Objects Example Sketches
* [Jitter Bug Exercise Example 1](../code/jitterBug_v2)
* [Bubbles Exercise Example 2](../code/arrayBubbles_v6)
