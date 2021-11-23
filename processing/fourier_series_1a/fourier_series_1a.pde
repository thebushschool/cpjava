// time to increment for each draw loop
float time = 0;
float radius = 100;

void setup() {
  size(600, 400);
}

void draw() {
  background(0);
  translate(width/2, height/2);

  float x = radius * cos(time);
  float y = radius * sin(time);


  stroke(255, 100);
  strokeWeight(2);
  noFill();
  ellipse(0, 0, radius * 2, radius * 2);

  stroke(255, 100);
  strokeWeight(2);
  fill(255);
  line(0, 0, x, y);
  ellipse(x, y, 8, 8);

  time -= 0.05;
}
