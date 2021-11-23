// time to increment for each draw loop
float time = 0;

// a recent single Wavelet (pair of x and y values) of input wave
Wavelet recent;

// an ArrayList of wavelets containing input wavelets
ArrayList <Wavelet> wave;

// number of wavelets in the input wave
int n = 2; //

void setup() {
  size(600, 400);
  wave = new ArrayList <Wavelet> ();
}

void draw() {
  background(0);
  translate(150, 200);  //translate to starting zero-point for animation 

  // computing the input wave - this can be read from a drawing file later!
  float x = 0;     // variables x and y holding input wave starting at zero
  float y = 0;

  for (int i = 0; i < n; i++) {  // loop to create each wavelet
    float prevx = x;
    float prevy = y;

    float o = i * 2 + 1;  // get odd numbers only
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
