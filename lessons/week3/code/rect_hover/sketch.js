function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  let s = 'Reset';  
  if (mouseX > 100 && mouseX < 150 && mouseY > 200 && mouseY < 220) {
    render_hovered_button(s, 100, 200)
    // Some code here to react to isMousePressed to reset sketch variables
  } else {
    render_dormant_button(s,100, 200)
  } 
}

function render_hovered_button(s, x, y) {
    fill(0);
    rect(x, y, 50, 20);
    fill(255)
    text(s, x+7, y+3, 50, 20);
}

function render_dormant_button(s, x, y) {
    fill(255);
    rect(x, y, 50, 20);
    fill(0)
    text(s, x+7, y+3, 50, 20);
}
