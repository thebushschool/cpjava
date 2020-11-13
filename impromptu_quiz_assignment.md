[_Bush School CPJava Fall Semester 2020_](https://chandrunarayan.github.io/cpjava/)


# Impromptu Quiz Assignment: Nov 13th

## A Java program to demonstrate Inheritance - A Paired Programming Team Quiz!
## Complete and submit this quiz by Sunday evening.

1. Work with your Software Partner for this in-classroom quiz
1. Submit working version, one submission per team as a Zip file including all code to your own practice repository when finished.
1. Ensure that program is tested and functional before submission.  Add a comment at the top to indicate your team and members
1. Create a sketch in Processing called inheritance_practice
1. Add setup() and draw() functions plus any declarations for global variables to this tab.
1. Add a canvas size of 500x300 pixels inside setup()
1. Create an SINGLE global variable to contain Array of Balls of size 50 - name the variable ballArray
1. Inside the setup() function, add 49 Balls to the ballArray calling the Ball() Constructor (that you will write later) in the Ball Class inside a loop.
1. Add the 50th Ball also to the same ballArray calling the OddBall() constructor outside the loop.
1. Leave the draw() function, empty for now. You will update it later.
1. Add a new tab called Ball and write Java code for class Ball here
1. Add xPos, yPos, xSz, ySz, bCol, bSpeed, bLife member variables to store x & y positions, x $ y sizes, color, speed and a integer indicating Lifetime left for the Ball.
1. Add a no argument constructor and initialize all variables with random xPos & yPos values inside the canvas width and height, xSz & ySz to be 20 pixels, random speed with 8 values between -1 & 6, bLife of 2000 and a random color.
1. Add a member function show() displaying the array of balls on the cavas as ellipses with xPos, yPos, xSz, Yz, filled with the color of the ball.
1. Add a member function update() to move all the balls, incrementing its current x position by 1 pixel to the right. Keep y position the same as it was when initialized. Make ball enter left side of canvas when it leaves the right side of canvas. Also Decrement the bLife - its lifetime - by 1.
1. Add a new tab called OddBall and write Java code for class OddBall using the "extend" keword to inherit from Ball
1. All member variables will be inherited to this class automatically.
1. Create a no argument constructor for OddBall and initialize xPos & yPos values to the very top of the canvas in the middle of the screen, xSz & ySz to be 40 pixels, constant speed of 1, bLife of 0 and a white color.
1. The member function show() displaying the array of balls on the cavas as ellipses will simply be inherited from the parent class Ball, no need to write code for this in OddBall
1. Add a member function update() for OddBall (which will override the Ball's move() function) to move the odd balls, incrementing its current y position by 1 pixel to the bottom. Keep x position the same as it was when initialized. Make ball enter top of canvas when it leaves the bottom of canvas. Do NOT decrement the bLife - its lifetime in this case.  This ball will live forever.
1. Lastly update the draw() function in the inheritance_practice tab to call the show() and update() functions for each ball.
1. I wrote something similar yseterday, your output shoule be somewhat similar to this below.
1. Please refer to the student-paced module [Unit 9a Inheritance & Encapsulation](https://docs.google.com/presentation/d/1APHiU8WDTsL6ll2f2R2uBWW79uEhsPXPJZxobfls5lM/edit#slide=id.p1) for help with code.
1. If you are still having trouble with this assignment and need help over the weekend, please [setup a conference using this SPECIAL WEEKEND link](https://calendly.com/chandru-narayan/wkend-evenings) and I can provide assistance.


<table style="padding:10px">
<tr>
    
 
  <td>
    <img src="./giftable/balls.gif" align="left" alt="2" width = 400px>
  </td>

<table style="padding:10px">

</tr>
</table>

