[_Bush School IDMD Spring Semester 2020_](https://chandrunarayan.github.io/idmd/)

# Week 8

## Learning Objectives
* Understand Motion of shapes in your canvas
* Understand code structuring by using Functions and use of Arrays

## Announcements
* [New Remote Schooling Daily Schedule](https://bush.myschoolapp.com/ftpimages/409/download/download_4431973.pdf)
* Extension of School Calendar to cover Cascade Weeks

## Week 8 Lessons
* ALL Teams: Motion
* ADV Team:  Functions, Arrays
* Split into STDTEAM/ADVTEAM Zoom Meeting Rooms or Individual Rooms for Async time 

### ALL Team Tasks
1. Review HW due after Comments Break 
1. Review Upcoming Topics on Motion
   *  Translate, Rotate, Push, Pop, Scale (Chapter 6)
   *  Wrap, Bounce, Tween, Shake, Circle, Wave, Spiral (Chapter 8)

### STD Team Tasks

1. Study and practice techniques for Motion Chapter 8 in Online textbook: [Getting Started with P5JS](https://drive.google.com/drive/u/2/folders/15GK0VESxqTvYGst9EtvILshb0MGlO4c5)
1. [Complete Moving Pacman Exercise](code/moving_pacman.md)

### ADV Team Tasks
1. Modularize your Robot project from Week 1 with a custom drawRobot() user defined Function.
1. Animate your Robot using techniques from Chapters 6 and 8
1. Create an Array of Robots by repeatedly calling your custom function. Refer to Chapter 9.8 and Chapters 10-11 in your Online textbook: [Getting Started with P5JS](https://drive.google.com/drive/u/2/folders/15GK0VESxqTvYGst9EtvILshb0MGlO4c5)

## Homework

### Due (Today) Monday 3/23
* STD and ADV Teams: [Submit Creative Exploration Project](../week4/homework/creativity-exploration.md). Add to Github and Student Portfolio
* ADV Team: [Submit Data Viz Project](../week5/homework/data-visualization.md). Add to Github and Student Portfolio
* ADV Team: [Submit Bubbles Exercise](../week7/code/exploding_bubbles.md). Add to Github and Student Portfolio

### Due Thursday 3/26
* STD Team: [Moving Pacman Exercise](code/moving_pacman.md). Add to Github and Student Portfolio
* ADV Team: [Moving Robot Project Part 1](code/moving_robot.md). Add Part 1 to Github and Student Portfolio

### Due Thursday 4/2
* ADV Team: [Moving Robot Project Part 2](code/moving_robot.md). Add Part 2 to Github and Student Portfolio

### Due Thursday 4/9
* ADV Team: [Moving Robot Project Part 3](code/moving_robot.md). Add Part 3 to Github and Student Portfolio

## Code Examples
* [Moving Pacman](code/movingPacman)
````
  background('#f5bf42');
  fill('#42c5f5')
  if (!mouseIsPressed) { // mouse is NOT Pressed
    x += speed; // Increase the value of x
    if (x > ????) { // If the shape is off screen
      x = ????; // move to the left edge
    }
    arc(x, 60, radius, radius, 0.52, 5.76);
  } else {  // mouse IS Pressed
    x += speed * direction; // Increase the value of x in the proper direction
    if ((x > ????) || (x < ????)) { //if shape is on edges of canvas
      direction = -direction; // Flip direction
    }
    if (direction == 1) {
      arc(x, 60, radius, radius, 0.52, 5.76); // Face right
    } else {
      arc(x, 60, radius, radius, 3.67, 8.9); // Face left
    }
  }
````
* [Scalar Squares](code/scalarSquares)
````
  translate(mouseX, mouseY);
  var scalar = mouseX / 60.0;
  scale(scalar);
  strokeWeight(1 / scalar);
  rect(-15, -15, 30, 30);
  translate(35, 10);
  rect(-15, -15, 15, 15);
````  
* [Scalar Differentiated Squares](code/scalarSquaresPP)
````
  push();
  translate(mouseX, mouseY);
  var scalar = mouseX / 60.0;
  scale(scalar);
  strokeWeight(1 / scalar);
  rect(-15, -15, 30, 30);
  pop();
  translate(35, 10);
  rect(-15, -15, 15, 15);
````
* [Articulated Hand](code/articulateHand)
````
  background(204);
  translate(100, 25); // Move to start position
  rotate(angle);
  strokeWeight(12);
  line(0, 0, 100, 0);
  translate(100, 0); // Move to next joint
  rotate(angle * 2.0);
  strokeWeight(6);
  line(0, 0, 60, 0);
  translate(60, 0); // Move to next joint
  rotate(angle * 2.5);
  strokeWeight(3);
  line(0, 0, 40, 0);
  angle += speed * angleDirection;
  if ((angle > HALF_PI) || (angle < 0)) {
    angleDirection *= -1;
  }
````

