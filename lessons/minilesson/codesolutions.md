## A solution for Dynamic rectangles
```javascript
// Dynamic Rectangles
// Learn to code visually!
// text following // are help comments !!

let loc1 = 0; // set up a variable pixel location for rect1
let loc2 = 0; // set up a variable pixel location for rect2

function setup() { // this function is run once.   

  // canvas size in pixels
  // width is set to 600, and height to 200
  createCanvas(400, 200);
}

function draw() { // this function is run repeatedly.  
  // set the background color to cyan
  background("cyan");
  
  // SAY HELLO BY UNCOMMENTING LINE BELOW
  sayHello();

  // UNCOMMENT LINE BELOW TO SEE WHAT HAPPENS!
  drawRect1();
  
  // UNCOMMENT LINE BELOW TO RUN YOUR MODIFIED CODE!
  drawRect2();
  
}

function sayHello() {
  // SAY HELLO TO YOUR FRIENDS - MODIFY TEXT BELOW!! 
  // use input parameters: quoted text, x, y loc in pixels
  fill("black");
  text("Hello friends!", 30, 30);  
}

function drawRect1() {
  // draw a moving orange rectangle using input parameters:
  // x loc, y loc, width, and height 
  fill("orange");
  rect(loc1, 50, 100, 50);

  // move loc1 over to by 5 pixels
  // reset to 0 if width of canvas is exceeded!
  if (loc1 < width) {
    loc1 = loc1 + 5;
  } else {
    loc1 = 0;
  }  
}

function drawRect2() {
// DRAW A VERICAL RECT WITH A DIFFERENT COLOR
// MOVING FROM TOP TO BOTTOM AT ANOTHER SPEED?
// COPY-PASTE-MODIFY LINES 37 to 48 BELOW THIS LINE!!
  fill("purple");
  rect(50, loc2, 50, 100);

  if (loc2 < height) {
    loc2 = loc2 + 1;
  } else {
    loc2 = 0;
  }
}
```
<br/>

## A solution for Dynamic sticks
```javascript
// Dynamic Sticks
// Learn to code visually!
// Anything following "//" are help comments !!

let loc = 0;  // set up a variable pixel location

function setup() {  // this function is run once.   
    // canvas size in pixels
    // width is set to 600, and height to 200
    createCanvas(600, 200); 

    // set the background color
    background("pink");  
    
    // limit the number of frames per second
    frameRate(1);
  
    // UNCOMMENT LINE BELOW TO SAY HELLO!
    sayHello();
} 

function draw() {  // this function is run repeatedly.  
  // UNCOMMENT ONE LINE BELOW TO SEE WHAT HAPPENS!
  drawSticks1();

  // UNCOMMENT ONE LINE BELOW TO RUN YOUR CUSTOM CODE!
  drawSticks2();   
  
  // dynamically move location for next draw loop
  moveLoc();
}

function sayHello() {
    // SAY HELLO TO YOUR FRIENDS - MODIFY TEXT BELOW!! 
    // use input parameters: quoted text, x loc & y loc
    text("Hello friends!", 20, height/2);
}

function drawSticks1() {
    // set the thickness of the line. 
    strokeWeight(5);
    // set the color using input parameters:
    // shades of red, green, blue, transparency in order
    // random(255) gives a random number 0 to 255 for each color
    stroke(random(255), random(255), random(255), 100);
    
    // draw the line using input parameters:
    // 2 pairs of points: x1, y1, x2, y2 
    line(loc, 0, width/2, height); 
}

function drawSticks2() {
  // CAN YOU DRAW ANOTHER SET OF LINES FROM BOTTOM TO TOP?
  // OR FROM LEFT TO RIGHT ??
  // YOU WILL NEED 2 LINES OF CODE SIMILAR TO 40, 44, 48
  // COPY THOSE BELOW AND MODIFY!
  strokeWeight(5);
  stroke(random(255), random(255), random(255), 150);
  line(width/2, 0, loc, height);
}

function moveLoc() {
    // move loc over by 40 pixels
    // reset to 0 if width of canvas is exceeded!
    if (loc < width) {
        loc = loc + 40;
    } else {
        loc = 0; 
    }
}

```