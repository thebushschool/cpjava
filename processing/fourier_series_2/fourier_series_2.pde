// time to increment for each draw loop
float time = 0;
float n = 2;

void setup() {
  size(600, 400);
}

void draw() {
  background(0);
  translate(150, 200);  //translate to starting zero-point for animation 

  // computing the input wave - this can be read from a drawing file later!
  float x = 0;     // variables x and y holding input wave starting at zero
  float y = 0;

  for (int i = 0; i < n; i++) {  
    float prevx = x;
    float prevy = y;

    float o = i * 2 + 1;  // get odd numbers
    float radius = 75 * (4 / (o * PI));
    x += radius * cos(o * time);
    y += radius * sin(o * time);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2, radius * 2);

    //fill(255);
    stroke(255);
    line(prevx, prevy, x, y);
    ellipse(x, y, 8, 8);
  }

  time += 0.05;
}
