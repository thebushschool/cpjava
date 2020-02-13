[_Bush School IDMD Spring Semester 2020_](https://chandrunarayan.github.io/idmd/)

# Plan
## Week 3

### Re-Introduction
* Did you write a statement about yourself and modify your TOC ?
* Do you know [my office hours](../../../syllabus.md) ?
* Do you how your [work will be evaluated](../../../syllabus.md)] ?
* Have you joined the [IDMD Slack IM](https://idmd2020.slack.com/) ?
* You may benefit by using an actual mouse in this class - Please ask me for one
* What's working and not working - [post a message in Slack](https://idmd2020.slack.com/) !

### Pair Programming for Week 3
* [Carter](https://carterschafer.github.io/idmd-portfolio) - [Maya](https://mayaschrum.github.io/idmd-portfolio)
* [Aidan](https://aidan-lynch.github.io/idmd-portfolio) - [Ghislaine](https://ghislaineederer.github.io/idmb-portfolio)
* [Philipp](https://philippknmergener.github.io/idmd-portfolio) - [Pamela](https://pamelabiniam.github.io/idmd-portfolio)
* [Erik](https://erikonsager.github.io/idmd-portfolio) - [Jeffrey](https://jpbatzz.github.io/idmd-portfolio) - [Leah](https://leahtruman.github.io/idmd-portfolio) 
* Student Portfolios in Paired Teams (Please help each other!)
* for a primer on index.html modifications [see this](../../../portfolio.md)
* Comment/Fix/clean your code; help each other!

## Lessons
* Conditional statement structure
* Logical operators (and, or)
* Events
* Variables: mouseX, mouseY, mouseIsPressed, frameCount
* Functions: random, dist, mousePressed, mouseReleased

### Exercises
* Rotating square

	```javascript
	// inspired by http://genekogan.com/

	function setup() {
		createCanvas(350, 350);
		// draw rect from CENTER
		// rectMode(CENTER);
	}

	function draw() {
		background(240);

		// move the origin to the pivot point
		translate(150, 150); 

		// then rotate the grid around the pivot point by a
		// number of degrees equal to the frame count of the sketch
		rotate(radians(frameCount));

		// and draw the square at the origin
		fill(0);
		rect(0, 0, 100, 100);
	}
	```

* Rotating rect

	```javascript
	function setup() {
		createCanvas(400, 400);
		background(240);
		rectMode(CENTER);
	}

	function draw() {
		//if (frameCount % 25 == 0) {
			//fill(random(255), random(255), random(255));
			//fill(0);
			translate(200, 200);
			rotate(radians(frameCount));
			rect(0, 0, 300, 20);
		//}
	}
	```

* Drawing with ellipses

	```javascript
	function setup() {
	  createCanvas(500, 500);
	  background(255, 0, 0);
	}

	function draw() {
	  ellipse(mouseX, mouseY, 25, 25);
	}

	function mousePressed() {
	  fill(random(255), random(255), random(255));
	}
	```

* Drawing with lines

	```javascript
	function setup() {
	  createCanvas(500, 500);
	  background(0, 0, 255);
	}

	function draw() {
	  if(mouseIsPressed) {
	    stroke(255, 255, 255);
	    line(150, 150, mouseX, mouseY);
	  }
	}
	```

* Rect hover

	```javascript
	function setup() {
	  createCanvas(400, 400);
	  noStroke();
	}

	function draw() {
	  background(204);
	  rect(100, 200, 180, 160);
	  
	  if (mouseX > 100 && mouseX < 280 && mouseY > 200 && mouseY < 360) {
	    fill(0);
	  } else {
	    fill(255);
	  }
	}
	```

* Growing circle

	```javascript
	var x = 250;
	var y = 250;
	var w = 50;

	function setup() {
	  createCanvas(500, 500);
	  background(255);
	  noStroke();
	}

	function draw() {
	  background(255);
	  fill(120);
	  ellipse(x, y, w, w);
	  distance = dist(x, y, mouseX, mouseY);
	  if (distance < w / 2) {
	    w = w + 1; 
	  } else {
	    w = 50;  
	  }
	}
	```

* Add restart button to Projects

	```javascript
	function button() {
	  if (mouseX > 300 && mouseX < 500 && mouseY > 775 && mouseY < 825  && mouseIsPressed) {
	    fill(0, 200, 0);
	  } else {
	    fill(0, 255, 0);
	  }
	  rect(300, 775, 200, 50, 10);
	  fill(0);
	  textSize(40);
	  text("Reset", 350, 815);
	}

	function mouseReleased() {
	  if (mouseX > 300 && mouseX < 500 && mouseY > 775 && mouseY < 825) {
	    resetVariables();
	  }
	}
	```

### Introduce Week 3 Homework

### Debrief