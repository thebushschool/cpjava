let planet = [];
let numPlanets = 3;

function setup() {
  createCanvas(800, 800);
  planet[0] = new Planet(300, 300, 5, 0.5, color("Magenta"));
  planet[1] = new Planet(100, 100, 15, 1.2,color(131, 171, 235));
  planet[2] = new Planet(50, 50, 25, 2, color(235, 211, 131));
}

function draw() {
  background(0);
  fill(color("Yellow"));
  ellipse(mouseX, mouseY, 60, 60);
  for (let i = 0; i < numPlanets; i++) {
    planet[i].update();
    planet[i].display();
  }
}