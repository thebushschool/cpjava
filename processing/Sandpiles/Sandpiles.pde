private int[][] grid;
private int gridx;
private int gridy;
private int xScale;
private int yScale;

public void setup(){
  size(900, 900);
  background(0);
  gridx = 100;
  gridy= 100;
  grid = new int[gridx][gridy];
  xScale = (int) width / gridx;
  yScale = (int) height / gridy;
}

public void draw(){
  //Draw grid
  //System.out.println(frameRate);
  for(int y = 0; y < gridy; y++){
    for(int x = 0; x < gridx; x++){
      fill(GetColor(grid[x][y]));
      noStroke();
      rect(x * xScale, y * yScale, xScale, yScale);
    }
  }
  
  //Calc nextGrid
  int[][] nextGrid = new int[gridx][gridy];
  
  for(int y = 0; y < gridy; y++){
    for(int x = 0; x < gridx; x++){
      nextGrid[x][y] += grid[x][y];
      if(grid[x][y] > 4){
        nextGrid[x][y] -= 4;
        if(x - 1 >= 0){
          nextGrid[x - 1][y] += 1;
        }
        if(x + 1 < gridx){
          nextGrid[x + 1][y] += 1; 
        }
        if(y - 1 >= 0){
          nextGrid[x][y - 1] += 1;
        }
        if(y + 1 < gridy){
          nextGrid[x][y + 1] += 1;
        }
      }
    }
  }
  
  grid = nextGrid;
}

void mousePressed(){
  mouseDragged();
}

void mouseDragged() {
  //get grid x / y from pixel x / y
  int clickX = (int) mouseX / xScale;
  int clickY = (int) mouseY / yScale;
  
  System.out.println(clickX +", " + clickY);
  
  if(clickX < gridx && clickX >= 0 && clickY < gridy && clickY >= 0)
  grid[clickX][clickY] += 10;
}

private color GetColor(int value){
  
  color c = color(255, 0, 255);
  
  switch (value){
    case 0:
     c = color(0);
     break;
    case 1:
     c = color(100, 100, 0, 5);
     break;
    case 2:
     c = color(150, 150, 0, 5);
     break;
    case 3:
     c = color(200, 200, 0, 5);
     break;
    default:
     c = color(255, 255, 0, 5);
     break;
  }
  
  return c;
    
}
