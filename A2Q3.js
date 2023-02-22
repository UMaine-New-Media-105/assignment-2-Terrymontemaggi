function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  myLogo(0,30,2.5);
}
function myLogo(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  beginShape();
  vertex(45, 0);
  vertex(0, 30);
  vertex(80, 100);
  vertex(160, 30);
  vertex(115, 0);
  vertex(45, 0);
  endShape(CLOSE);
  pop();
}
