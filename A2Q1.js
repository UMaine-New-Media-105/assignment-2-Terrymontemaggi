function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
fill("black")
  grid(0, 0, 80);//row 1
  fill("rebeccapurple")
  grid(0, 80, 80);//row 2
  grid(0, 160, 80);//row 3
  grid(0, 240, 80);//row 4
  grid(0, 320, 80);//row 5
fill("black")
  column(160,0,80)
  
  function column(x,y,size){
    
    rect(x,y,size)
    rect(x,y+80,size)
    rect(x,y+80*2,size)
    rect(x,y+80*3,size)
    rect(x,y+80*4,size)
  }
}

function grid(x, y, size) {
  rect(x, y, size);
  rect(x + 80, y, size);
  
  rect(x + 80 * 2, y, size);

  rect(x + 80 * 3, y, size);

  rect(x + 80 * 4, y, size);
}
