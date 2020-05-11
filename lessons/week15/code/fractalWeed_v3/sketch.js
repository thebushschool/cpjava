var angle;
var axiom = 'X';
var sentence = axiom;
var len = 10;
var genCount = 0;
var maxGen = 8;

var rules = [];
rules[0] = {
  a: 'X',
  b: 'F+[[X]-X]-F[-FX]+X)',
  c: 'FF'
};
rules[1] = {
  a: 'F',
  b: 'FF'
};

function generate() {
  genCount += 1;
  if (genCount < maxGen) {
    len *= 0.86;
    var nextSentence = '';
    for (var i = 0; i < sentence.length; i++) {
      var current = sentence.charAt(i);
      var found = false;
      for (var j = 0; j < rules.length; j++) {
        if (current == rules[j].a) {
          found = true;
          nextSentence += rules[j].b;
          break;
        }
      }
      if (!found) {
        nextSentence += current;
      }
    }
    sentence = nextSentence;
    //createP(sentence);
    plot();
  } else {
    createP("No more growth!");
  }
}

function plot() {
  background(51);
  resetMatrix();
  translate(width / 3, height - 10);
  stroke(255, 255);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == 'F') {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == '-') {
      rotate(angle);
    } else if (current == '+') {
      rotate(-angle);
    } else if (current == '[') {
      push();
    } else if (current == ']') {
      pop();
    }
  }
}

function setup() {
  createCanvas(400, 800);
  angle = -25;
  background(51);
  //createP(axiom);
  plot();
  var button = createButton('generate');
  button.mousePressed(generate);
}