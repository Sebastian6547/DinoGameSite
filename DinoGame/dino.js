class Dino {
  
  // unlike C#, constructors don't have the same name of the class
  constructor() {
    this.size = 100;
    this.x = 50;
    this.y = height - this.size;
    this.vy = 0;
    this.gravity = 2;
    this.life = 1;

    // vy is the velocity or speed along the y axis
    // gravity is used to adjust the speed
  }

  // displaying/drawing the dino on the canvas
  show() {
    image(dinoImage, this.x, this.y, this.size, this.size);
  }

  jump() {
    // the dino can jump only if it is on the ground
    if (this.y == height - this.size) {
      this.vy = -35;
    }
  }
  fly(){
    this.vy = -35;
  }

  move() {
    // adding velocity to y and gravity to velocity
    this.y += this.vy;
    this.vy += this.gravity;

    // restricting the y of the dino between 0 and height - this.size of the canvas so it is always visible on the canvas
    this.y = constrain(this.y, 0, height - this.size);
  }

  // checking if the cactus and the dino collide using a function collideCircleCircle from the collide2d library -  the libray is included in index.html in a script tag
  hits(object) {
    let x1 = this.x + this.size * 0.5;
    let y1 = this.y + this.size * 0.5;
    let x2 = object.x + object.w * 0.5;
    let y2 = object.y + object.h * 0.5;
    return collideCircleCircle(x1, y1, this.size, x2, y2, object.w, object.h);
  }
}