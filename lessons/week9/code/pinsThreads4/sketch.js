//PINS THREADS4 WITH VIBRATE CODE EXTRACT
let pins = [];
let pinLoc = [];
let colors = [];
let maxnum = 10;
let pinSize = 15;
let speed = 1;
let pct = 0;

function setup() {
  //background(200);
  createCanvas(500, 200);
  createPins();
  createColors();
}

function draw() {
  background(200);
  showDisplay();
}

function createPins() {
  for (let i = 0; i < maxnum; i++) {
    pins[i] = constrainPin(createVector(random(width), random(height)));
    pinLoc[i] = {
      startX: pins[i].x,
      startY: pins[i].y,
      stopX: pins[i].x,
      stopY: pins[i].y
    };
  }
}

function createColors() {
  for (let i = 0; i < maxnum; i++) {
    colors[i] = color(random(255), random(255), random(255))
  }
}

function showDisplay() {
  for (let i = 0; i < maxnum; i++) {
    fill(colors[i]);
    stroke(colors[i]);
    strokeWeight(3);
    ellipse(pins[i].x, pins[i].y, pinSize, pinSize);
    line(pins[i].x, pins[i].y,
      pins[(i + 1) % maxnum].x, pins[(i + 1) % maxnum].y);
    if (!mouseIsPressed) {
      pins[i] = vibrate(pins[i]);
    } else {
      pins[i] = movePin(pins[i], pins[(i + 1) % maxnum], pinLoc[i]);

    }
  }

  //  }
}

// SAVE CANVAS FUNCTION
function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas('mycanvas', 'png');
}

function constrainPin(thisPin) {
  thisPin.x = constrain(thisPin.x, pinSize / 2, width - pinSize / 2);
  thisPin.y = constrain(thisPin.y, pinSize / 2, height - pinSize / 2);
  return thisPin;
}

function vibrate(thisPin) {
  thisPin.x += random(-speed, speed);
  thisPin.y += random(-speed, speed);
  thisPin = constrainPin(thisPin);
  return thisPin;
}

function movePin(thisPin, nextPin, thisLoc) {
  if (pct == 0) {
    thisLoc.startX = thisPin.x;
    thisLoc.startY = thisPin.y;
    thisLoc.stopX = nextPin.x;
    thisLoc.stopY = nextPin.y;
  } else {
    console.log("here");
    thisPin.x = thisLoc.startX + (thisLoc.stopX - thisLoc.startX) * pct / 100;
    thisPin.y = thisLoc.startY + (thisLoc.stopY - thisLoc.startY) * pct / 100;
  }
  console.log("pecent is: " + pct);
  pct = (pct + speed) % 100;
  console.log("pecent is: " + pct);
  console.log(frameCount, thisPin.x, thisPin.y);
  console.log(frameCount, nextPin.x, nextPin.y);
  return thisPin;
}