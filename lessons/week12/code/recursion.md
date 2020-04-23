
[_Bush School IDMD Spring Semester 2020_](https://chandrunarayan.github.io/idmd/)

## Exercise: Recursion with Shapes and Colors


## ALL TEAMS

1. Write custom function and invoke it to produce repeating shapes with these qualities:
    * Function should be recursive with aproperly defined exit condition
    * Shapes are self-similar - they should not be exact but similar with small variations in scale or color for each shape
    * [Recursive Squares Example](../code/recursiveSquares)

1. EXTRA CREDIT: Do the above PLUS code a numerical Sketch like one from below. It should include user input via a Input Slider (See reference section below):
    * Calculate the [Factorials of numbers n! = n x (n-1)!](https://www.mathsisfun.com/numbers/factorial.html) with user input via a slider.  
    * Calculate the [Fibonacci sequence Xn = Xn-1 + Xn-2](https://www.mathsisfun.com/numbers/fibonacci-sequence.html) with user input via a slider.  
    * Recursive [Factorial Sequence Example](../code/factorialNums/)

1. Test your Sketch and make sure it has no infinite loops or other errors
1. Submit at least one Sketch tp Github.  Additional Sketches will be assigned extra credit! 

## Reference
### Recursive Circles Example and Code]
[Recursive Circles Example](../code/recursiveCircles)
````
function recursiveCircle(x, y, dia) {
  stroke(0);
  noFill();
  ellipse(x, y, dia, dia);
  if (dia >= 2) {
    recursiveCircle(x+dia/2, y, dia / 2);
    recursiveCircle(x-dia/2, y, dia / 2);
    recursiveCircle(x, y+dia/2, dia / 2);  //Sierpinski triangle
    //recursiveCircle(x, y-dia/2, dia / 2);
  }
}

function setup() {
  createCanvas(600, 600);
  recursiveCircle(width / 2, height / 2, 300);
}

function draw() {
  //background(230);
}
````
### Input Slider Exampe and Code
[Input Slider Example](../../week9/code/inputSlider/)
````
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
````


