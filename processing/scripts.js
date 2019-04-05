// function setup() {
//     // Create the canvas
//     createCanvas(1480, 790);
//     background(200);
   
  
//     // Set colors
//     fill(204, 101, 192, 127);
//     stroke(127, 63, 120);
  
//     // A rectangle
//     rect(40, 120, 120, 40);
//     // An ellipse
//     ellipse(240, 240, 80, 80);
//     // A triangle
//     triangle(300, 100, 320, 100, 310, 80);
  
//     // A design for a simple flower
//     translate(580, 200);
//     noStroke();
//     for (let i = 0; i < 10; i ++) {
//       ellipse(0, 30, 20, 80);
//       rotate(PI/5);
//     }
//   }

function setup() {
  console.log('--setup--');
  createCanvas(windowWidth, windowHeight);
  colors = [color('#feeb79'), color('#101ea1'), color('#f835f8'), color('#232822')];
}

function draw() {
  background('#222222');

  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  polygon(0, 0, 82, 3);
  pop();
  fill(51);
  stroke(255);
  strokeWeight(10);


  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 80, 20);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  polygon(0, 0, 70, 7);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  polygon(0, 0, 70, 7);
  pop();
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

  