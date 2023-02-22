function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // it was going to be a superman logo but it would have had 15 points
  beginShape()  
  vertex(145,15)
  vertex(100,45)
  vertex(180,115)
  vertex(260,45)
  vertex(215,15)
  vertex(145,15)
  endShape(CLOSE)
  
}
