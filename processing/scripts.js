var pressed=false;
var sides=3;

function setup() {
  console.log('--setup--');
  createCanvas(windowWidth, windowHeight);
  background('#222222');
}

function draw() {
  background(255, 204, 0);
  fill(51);
  stroke(255);
  strokeWeight(10);
  
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 300, sides);
  pop();
  
}

  

function keyPressed(){
  if (keyCode === UP_ARROW) {
    sides=sides+1;
  } else if (keyCode === DOWN_ARROW) {
    sides=sides-1;
  }
  
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

  