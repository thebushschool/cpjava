function setup() {
  createCanvas(600, 600);

  var w = width;
  while (w > 0) {
    stroke(0);
    grad = map(w, 0, width, 0, 255)
    print(grad);
    fill(grad);
    ellipse(width / 2, height / 2, w, w);
    w = w - 20;
  }
}

function draw() {

}