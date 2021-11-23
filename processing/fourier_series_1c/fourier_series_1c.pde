// time to increment for each draw loop
float time = 0;
int n = 5;  // number of generations
float x, y;
float r = 100;

// a recent single Wavelet (pair of x and y values) of input wave
Wavelet recent;

// an ArrayList of wavelets containing input wavelets
ArrayList <Wavelet> wave;

void setup() {
  size(600, 400);
  wave = new ArrayList <Wavelet> ();
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
  
  recent = new Wavelet(x, y);  //create a wavelet with the final x and y
  wave.add(0, recent);

  translate(200, 0);
  line(x - 200, y, 0, wave.get(0).y);

  beginShape();
  noFill();
  for (int i = 0; i < wave.size(); i++) {
    vertex(i, wave.get(i).y);
  }
  endShape();

  if (wave.size() > 250) {
    for (int n = 250; n < wave.size(); n++) {
      wave.remove(n);
    }
  }  
  
  
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
