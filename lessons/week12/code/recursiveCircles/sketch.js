function recursiveCircle(x, y, dia) {
  stroke(0);
  noFill();
  ellipse(x, y, dia, dia);
  if (dia >= 2)
        recursiveCircle(x, y, dia / 2);
}

function setup() {
  createCanvas(600, 600);
  recursiveCircle(width / 2, height / 2, 300);
}

function draw() {
  //background(230);
}
