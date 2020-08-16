let maxnum = 20
let minSlider, maxSlider;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  
  minSlider = createSlider(-2.5, 0, -1, 0.01);
  maxSlider = createSlider(0, 2.5, 1, 0.01);
}

function draw() {
  loadPixels();
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {

      let a = map(x, 0, width, minSlider.value(), maxSlider.value());
      let b = map(y, 0, height, minSlider.value(), maxSlider.value());

      let ainit = a; //store initial value of real component
      let binit = b; //store initial value of compl component

      let n = 0;
      let z = 0;

      while (n < maxnum) {
        let asq = a * a;
        let bsq = b * b;
        let tab = 2 * a * b;

        a = asq - bsq + ainit; //get new value of the real component
        b = tab + binit; //get new value of the compl component

        if (abs(a + b) > 20) {
          break;
        }

        n++;
      }

      let light = map(n, 0, maxnum, 0, 25);
      light = map(sqrt(light), 0, 1, 0, 50);
      if (n === maxnum) {
        light = 0;
      }

      let pix = (x + y * width) * 4;
      pixels[pix + 0] = light;
      pixels[pix + 1] = light;
      pixels[pix + 2] = light;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();  
}