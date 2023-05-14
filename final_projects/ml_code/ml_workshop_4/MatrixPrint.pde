/**
 * Bush School CPJava Class Final Project
 * Project Details: https://chandrunarayan.github.io/cpjava/final_projects/
 * static MatrixPrint class with static mprint function 
 * used for debugging purposes
 */
static class MatrixPrint {
  /**
   * mprint function for debugging.
   * @param title: description of print outs following
   * @param in: input Matrix to print
   * @param rows: number of rows in matrix to print
   * @param rows: number of columns in matrix to print
   */   
  static void mprint(String title, Matrix in, int rows, int cols) {
    System.out.println(String.format("%s:", title));
    // caling the Matrix print function
    in.print(rows, cols);
  }
}
