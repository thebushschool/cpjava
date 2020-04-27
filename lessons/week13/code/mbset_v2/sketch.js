let maxnum = 20

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);

}

function draw() {
  loadPixels();
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {

      let a = map(x, 0, width, -2, 2);
      let b = map(y, 0, height, -2, 2);

      let ainit = a; //store initial value of real component
      let binit = b; //store initial value of compl component

      let n = 0;

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

      let light = 0;
      if (n === maxnum) {
        light = 255;
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