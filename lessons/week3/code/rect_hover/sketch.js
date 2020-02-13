function setup() {
  createCanvas(400, 400);
  noStroke();
}
function draw() {
  background(220);
  let s = 'Reset';
  if (mouseX > 100 && mouseX < 150 && mouseY > 200 && mouseY < 220) {
    render_hovered_button(s, 100, 200)
  } else {
    render_dormant_button(s,100, 200)
  }
}
function render_hovered_button(s, x, y) {
    fill(0);
    rect(x, y, 50, 20);
    fill(255)
    // Add some code here if isMousePressed then reset sketch variables
    if(mouseIsPressed) {
      fill(200)
      resetVariables();
    } else {
      fill(255)
    }
  text(s, x+7, y+3, 50, 20);
}
function render_dormant_button(s, x, y) {
    fill(255);
    rect(x, y, 50, 20);
    fill(0)
    text(s, x+7, y+3, 50, 20);
}
function resetVariables() {
  // reset the variables ti inital sketch values
  print("resetting sketch variables")
}