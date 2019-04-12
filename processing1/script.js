var pressed=false;
var sides=3;
var speed = 150;
var num;
var count = document.getElementById("count");

var r1 = 255;
var g1 = 204;
var b1 = 0;
var r2 = 51;
var g2 = 0;
var b2 = 0;


function setup() {
  console.log('--setup--');
  createCanvas(windowWidth, windowHeight);
  background('#222222');
}

function draw() {
  background(r1, g1, b1);
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / speed);
  fill(r2, g2, b2); // filling color
  stroke(255); // stroke color
  strokeWeight(10);
  polygon(0, 0, 300, sides);
}

function keyPressed(){
  event.preventDefault();
  if (keyCode === UP_ARROW) {
    if (sides != 17){ // sides is not 2
      sides = sides + 1;
      speed = speed - 10;
    } else { // sides is 2
      sides = 17;
      speed = 10;
    }
    r1 = Math.random()*256;
    g1 = Math.random()*256;
    b1 = Math.random()*256;

    r2 = Math.random()*256;
    g2 = Math.random()*256;
    b2 = Math.random()*256;
  } else if (keyCode === DOWN_ARROW) {
    if (sides != 3){ // sides is not 2
      sides = sides - 1;
      speed = speed + 10;
    } else { // sides is 2
      sides = 3;
      speed = 150;
    }
    r1 = Math.random()*256;
    g1 = Math.random()*256;
    b1 = Math.random()*256;

    r2 = Math.random()*256;
    g2 = Math.random()*256;
    b2 = Math.random()*256;
  }
  num = sides;
  count.innerHTML = "Sides = " + num;
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}





