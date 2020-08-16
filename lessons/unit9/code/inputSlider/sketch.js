function setup() {
  createCanvas(650, 200);
  textSize(20);

  inputElemA = createInput(10);
  inputElemA.position(30, 40);

  inputElemB = createInput(100);
  inputElemB.position(30, 60);

  sliderElem = createSlider(-100, 100, 50, 1);
  sliderElem.position(30, 120);
}

function draw() {
  clear();
  text("Enter two values between which the " +
    "number would be constrained", 20, 20);
  text("Move the slider to observe the effects" +
    " of the constrain() function", 20, 100);

  // Convert the string value to a number value 
  inputValA = Number(inputElemA.value());
  inputValB = Number(inputElemB.value());
  sliderVal = sliderElem.value();

  text("The slider value is: " + sliderVal, 20, 160);

  // Display the constrained value 
  text("The constrained value is: " +
    constrain(sliderVal, inputValA,
      inputValB), 20, 180);
}