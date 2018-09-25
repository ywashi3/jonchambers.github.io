var canvas;

var h1;

var bgcolor;

var button;

function setup() {
  // put setup code here
 createP("This is a p");
 h1 = createElement('h1', 'My name is...');
 canvas = createCanvas(600, 200);

 canvas.position(0,200);
 bgcolor = 200;
 button = createButton("go, go, go")
 button.mousePressed(changeColor);
}

function changeColor(){

  bgcolor = color(random(255));
}
// function mousePressed(){
// 	//.html changes the content in a object
// 	h1.html("Jon Chambers");
// 	createP("click" + mouseX);



// }
function draw() {
  // put drawing code here
  background(bgcolor);
  fill(255, 0 ,0);
  ellipse(100, 100, 100, 100)
 
}