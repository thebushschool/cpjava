let yoff = 0;
let inc = 0.005;


function setup() {
  createCanvas(710, 400);
}

function draw() {
  background(50);
  fill(66,149,245);
  //stroke(255);
  //noFill();
  beginShape();
  let xoff = 0;
  for (var x = 0; x<width; x++) {
    stroke(255);
    let y = map(noise(xoff, yoff), 0, 1, 200, 300);
    vertex(x, y);
    
    xoff += inc;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}