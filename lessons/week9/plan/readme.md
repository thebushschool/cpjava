[_Bush School IDMD Spring Semester 2020_](https://chandrunarayan.github.io/idmd/)

# Week 9

## Week 9 Lessons
* How to code in Modular Fashion
* Create High-level and Low-level Functions
* Use any available P5JS Library Functions
* Use of Multi-dimensional Arrays

### Modular Code Development
* Create outline of functions
* Declare core container objects
* Define (Add content) to container
* Test and Iterate in each stage
* Validate and Publish to Github

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

## Code Examples
* [Pins and Threads](../code/pinsPoint2)

![alt text][savecanvas]

[savecanvas]: https://chandrunarayan.github.io/idmd/savecanvas.png "save canvas"
