// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let yoff = 0;
let inc = 0.005;
let surf;

class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.surf = [];
  }

  // Is the Mover in the Liquid?
  contains(mover) {
    let l = mover.position;
    return l.x > this.x && l.x < this.x + this.w &&
      l.y > this.surf[l.x] && l.y < this.surf[l.x] + this.h;
  }

  // Calculate drag force
  calculateDrag(mover) {
    // Magnitude is coefficient * speed squared
    let speed = mover.velocity.mag();
    let dragMagnitude = this.c * speed * speed;

    // Direction is inverse of velocity
    let dragForce = mover.velocity.copy();
    dragForce.mult(-1);

    // Scale according to magnitude
    // dragForce.setMag(dragMagnitude);
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce;
  }

  display() {
    noStroke();
    fill(66, 149, 245);
    //stroke(255);
    //noFill();
    beginShape();
    let xoff = 0;
    for (var x = 0; x < width; x++) {
      stroke(255);
      let y = map(noise(xoff, yoff), 0, 1, 200, 600);
      vertex(x, y);
      this.surf[x] = y;
      xoff += inc;
    }
    yoff += 0.01;
    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

  }
}