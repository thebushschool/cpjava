[_Bush School IDMD Spring Semester 2020_](https://chandrunarayan.github.io/idmd/)

# Week 9

## Week 9 Lessons
* How to code in Modular Fashion
* Create High-level and Low-level Functions
* Use any available P5JS Library Functions
* Use of Multi-dimensional Arrays
* User Input with Input Sliders

### Modular Code Development
* Create outline of functions
* Declare core container objects
* Define (Add content) to container
* Test and Iterate in each stage
* Validate and Publish to Github

### Outline of Functions and Containers
````
let pins = [];
let colors = [];
let maxnum = 50;
function setup() {
  createCanvas(600, 600);
  createPins();
  createColors();
}
function draw() {
  background(255);
  show_display();
}
````
### Declare and define Arrays
* pins[]:

    * [ {x0,y0}, {x1, y1}, {x2, y2}, ...{x49,y49} ]
    * create each pin using the P5JS Library Function createVector()
````
    let x = int(random(0, width));
    let y = int(random(0, height));
    pins[i] = createVector(x, y); //assign vector
````
* colors[]:

    * [ {r0,g0,b0,a0}, {r1,g1,b1,a1}, ... {r49,g49,b49,a49} ]
    * create each pin using the P5JS Library Function color()
````
    colors[i] = color(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
````
### User Input and Constraints
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
### Save Canvas to local file
````
if (key == 's' || key == 'S') saveCanvas('mycanvas_' + str(millis()), 'png');
````
## Code Examples
* [User Input Slider]((../../week9/code/pinsThreads3/))
![alt text](inputSlider.png)
* [Pins and Threads](../../week9/code/pinsThreads3/)
![alt text](savecanvas.png)
