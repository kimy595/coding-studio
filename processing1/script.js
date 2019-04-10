var pressed=false;
var sides=3;


function setup() {
  console.log('--setup--');
  createCanvas(windowWidth, windowHeight);
  background('#222222');
}

function draw() {
  background(255, 204, 0);
  
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  fill(51); // filling color
  stroke(255); // stroke color
  strokeWeight(10);
  polygon(0, 0, 300, sides);

  // fill(10,10,200); // filling color
  // stroke(255); // stroke color
  // strokeWeight(10);
  // circle(30*sides,30*sides,20); //draw the ball
  // pop();
  
}

  

function keyPressed(){
  if (keyCode === UP_ARROW) {
    if (sides != 17){ // sides is not 2
      sides=sides+1;
    } else { // sides is 2
      sides = 17;
    }
  } else if (keyCode === DOWN_ARROW) {
    if (sides != 3){ // sides is not 2
      sides=sides-1;
    } else { // sides is 2
      sides = 3;
    }
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





