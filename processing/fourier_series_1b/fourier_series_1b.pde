// time to increment for each draw loop
float time = 0;
int n = 3;  // number of generations
float x, y;
float r = 100;

void setup() {
  size(600, 400);
}

void draw() {
  background(0);
  translate(150, 200);  //translate to starting zero-point for animation 

  // computing the input wave - this can be read from a drawing file later!
  float prevx = 0.0;     // variables x and y holding input wave starting at zero
  float prevy = 0.0;



  for (int gen = 0; gen < n; gen++) {
    epicycle(prevx, prevy, gen);    
    prevx = x;
    prevy = y;
  }

  time += 0.05;
}

void epicycle(float prevx, float prevy, int gen) {

  float o = gen * 2 + 1;  // get odd numbers based on gen
  float nr = 75 * (4 / (o * PI));

  x = prevx + nr * cos(o * time);
  y = prevy + nr * sin(o * time);

  show(prevx, prevy, x, y, nr);
}

void show(float prevx, float prevy, float x, float y, float nr) {
  stroke(255, 100);
  noFill();
  ellipse(prevx, prevy, nr * 2, nr * 2);
  stroke(255);
  line(prevx, prevy, x, y);  
  ellipse(x, y, 8, 8);
}
