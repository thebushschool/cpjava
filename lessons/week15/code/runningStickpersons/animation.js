class Animation {  
  constructor(image_, x_, y_) {
    this.images = image_;
    this.x = x_;
    this.y = y_;

    
    // A random speed
    // Speed, this will control both the animations movement
    // as well as how fast it cycles through the images
    this.speed = random(1,5);

    // Starting at the beginning
    // The index into the array is a float!
    // This allows us to vary the speed of the animation
    // It will have to be converted to an int before the actual image is displayed
    this.index = 0;
  }

  display() {
    // We must convert the float index to an int first!
    let imageIndex = int(this.index);
    image(this.images[imageIndex], this.x, this.y);
  }

  move() {
    // Object only moves horizontally
    this.x += this.speed;
    if (this.x > width) {
      this.x = -this.images[0].width;
    }
  }

  next() {
    // Move the index forward in the animation sequence
    this.index += this.speed;
    // If we are at the end, go back to the beginning
    if (this.index >= this.images.length) {
      // We could just say index = 0
      // but this is slightly more accurate
      this.index -= this.images.length;
    } 
  }
}