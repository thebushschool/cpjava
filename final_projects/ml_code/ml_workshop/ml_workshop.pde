import Jama.*;

NeuralNetwork myNN;

void setup() {
  myNN = new NeuralNetwork(2, 2, 2, 0.1);
  double[][] awIH = {{3.0, 2.0}, {1.0, 7.0}};
  Matrix wIH = new Matrix(awIH);
  double[][] awOH = {{2.0, 3.0}, {1.0, 4.0}};
  Matrix wOH = new Matrix(awOH);
  double[][] ainp = {{7}, {-5}};
  Matrix inp = new Matrix(ainp);
  inp.timesEquals(0.1);
  Matrix hid_inp = wIH.times(inp);

  wIH.print(3,2);
  wOH.print(3,2);     
  inp.print(3,2);  
  hid_inp.print(3,2);  
  hid_inp.transpose().print(3,2);
}

void draw() {
}
