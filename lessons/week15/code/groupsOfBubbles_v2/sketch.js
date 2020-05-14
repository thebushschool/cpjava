let groups = [];

function setup() {
  let text = createP("click to add groups of bubbles");
  text.position(10, 365);

  createCanvas(640, 360);
}

function draw() {
  background(51);
  for (let i = 0; i < groups.length; i++) {
    groups[i].addBubble();
    groups[i].run();
  }
}

function mousePressed() {
  groups.push(new BubbleGroups(1, createVector(mouseX, mouseY)));
}