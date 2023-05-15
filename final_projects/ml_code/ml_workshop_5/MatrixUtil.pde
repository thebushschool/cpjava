/**
 * Bush School CPJava Class Final Project
 * Project Details: https://chandrunarayan.github.io/cpjava/final_projects/
 * static MatrixUtil class with static mprint function
 * used for debugging purposes
 */
static class MatrixUtil {
  
  /**
   * mprint function for debugging.
   * @param title: description of print outs following
   * @param in: input Matrix to print
   */
  static void mprint(String title, Matrix in) {
    System.out.println(String.format("%s:", title));
    // caling the Matrix print function
    in.print(3, 3);  // print 3 digits of precision for rows and cols
  }

  /**
   * mcrud function for creating a random uniform distribution weights matrix.
   * @param rows: number of rows
   * @param cols: number of cols
   * @return out: return created matrix   
   */
  static Matrix mcrud(int rows, int cols) {
    // caling the Matrix random() to create a matrix of weights
    Matrix out = Matrix.random(rows, cols);
    return out;
  }
}
