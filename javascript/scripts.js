var ellipseDiameter = 80;
var ellipseRandom;
var eillipseColor= "#ff99ff";
var eillipseColor2= "#6699ff";
var colors; 

function setup() {
    console.log('--setup--');
    createCanvas(windowWidth, windowHeight);
    colors = [color('#feeb79'), color('#101ea1'), color('#f835f8'), color('#232822')];
}

function draw() {
    ellipseRandom = random(1, ellipseDiameter);
    // console.log(ellipseRandom);
        if (mouseIsPressed) {
            noStroke();
            fill(getRandomColor());
          } else {
            stroke(0);
            fill(255);
         }
         ellipse(mouseX, mouseY, ellipseRandom , ellipseRandom );
} 

function getRandomColor() {
    return colors[int(random(0,colors,length))];
}