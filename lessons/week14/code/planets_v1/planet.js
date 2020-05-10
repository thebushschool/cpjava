class Planet {
  constructor(x, y, d, m, c) {
    this.pos = createVector(x+mouseX, y+mouseY);
    this.vel = p5.Vector.random2D().setMag(random(3));
    this.dia = d;
    this.mass = m;
    this.clr = c;
  }
  
  update() {
    let mouseP = createVector(mouseX, mouseY);          
    this.acc = p5.Vector.sub(mouseP, this.pos);         //Update Acceleration
    this.acc.limit(0.1*this.mass);
    
    this.vel.add(this.acc);                             //Update Velocity
    this.vel.limit(5*this.mass);
    
    this.pos.add(this.vel);                             //Update Position
  }
  
  display() {
    stroke(255);
    strokeWeight(2);
    fill(this.clr);
    ellipse(this.pos.x, this.pos.y, this.dia, this.dia);
  }
}
  