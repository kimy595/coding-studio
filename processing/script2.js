var squareWidth=3;

var numBalls = 13;
var spring = 0.05;
var gravity = 0.03;
var friction = -0.9;
var balls = [];
// var speed = 1;

let squareWidth = 400; // set square size

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
  rotate( frameCount/100);
  rect( -squareWidth, -squareWidth ,squareWidth,squareWidth); // draw square at the center
 
  strokeWeight(1);
  balls.forEach(ball => { // draw ball
    ball.collide();
    ball.move2();
    ball.display();
  });
  pop();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    if (numBalls != 13){ 
      numBalls=numBalls+1;
    } else { 
      numBalls = 13;
    }
  } else if (keyCode === DOWN_ARROW) {
    if (numBalls != 3){ 
      numBalls=numBalls-1;
    } else {
      numBalls = 3;
    }
  }
  
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
    if (this.x + this.diameter / 2 > squareWidth) { // detect collision
      this.x = squareWidth - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < -squareWidth) {
      this.x = -squareWidth + this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 >  squareWidth) {
      this.y = squareWidth - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < - squareWidth) {
      this.y = - squareWidth + this.diameter / 2;
      this.vy *= friction;
    }
  }  

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}