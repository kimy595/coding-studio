let numBalls = 15;
let spring = 0.1;
let gravity = 0.05;
let friction = -0.9;
let balls = [];

let squareWidth = 500; // set square size

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numBalls; i++) { // setup ball
    balls[i] = new Ball(
      random(width),
      random(height),
      random(30, 70),
      i,
      balls
    );
  }
  noStroke();
  fill(255, 204);
}

function draw() {
  background(255, 204, 0); // set bg color
  
  push();
  strokeWeight(4);
  stroke(100); // set square color
  translate(width / 2, height / 2);
  // rotate( frameCount/100);
  rect( -squareWidth/2, -squareWidth/2 ,squareWidth,squareWidth); // draw square at the center
  
  strokeWeight(1);
  balls.forEach(ball => { // draw ball
    ball.collide();
    ball.move2();
    ball.display();
  });
  pop();
}

class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      if (distance < minDist) {
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move2() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > squareWidth/2) { // detect collision
      this.x = squareWidth/2 - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < -squareWidth/2) {
      this.x = -squareWidth/2 + this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 >  squareWidth/2) {
      this.y = squareWidth/2 - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < - squareWidth/2) {
      this.y = - squareWidth/2 + this.diameter / 2;
      this.vy *= friction;
    }
  }  

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
