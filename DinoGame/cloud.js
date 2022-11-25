class Cloud {

    // unlike C#, constructors don't have the same name of the class
    constructor() {
      this.w = 100;
      this.h = 30;
      this.x = width;
      this.y = height/1.5 - this.h;
  
      // width is the width of the canvas
      // height is the height of the canvas
      // we are placing the cactus at the bottom of the canvas with this.y = height - this.size
    }
  
    // displaying/drawing the cactus on the canvas
    show() {
      image(cloudImage, this.x, this.y, this.w, this.h);
    }
  
    // moving the cactus on the x-axis
    // feel free to modify the speed by modifying the number 
    move() {
      this.x -= 8;
    }
    stop(){
    this.x = -100;
  }
  }