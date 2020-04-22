function factorial(num) {
  if (num > 0)
    return num * factorial(num - 1);
  else
    return 1;
}

let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 20, 3, 1);
  slider.position(10, 10);
  //noLoop();
}

function draw() {

  background(220);
  for (let i = 0; i <= slider.value(); i++) {
    let res = factorial(i);
    text("factorial of " + i + " is:\t" 
         + res.toString(), 40, 40 + i * 20);
  }
}