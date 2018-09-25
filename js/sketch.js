var canvas;

var h1;

var x = 100;
var y = 100;


function setup() {
  // put setup code here
 createP("This is a p");
 h1 = createElement('h1', 'My name is...');
 canvas = createCanvas(600, 600);

 canvas.position(200,300);

}

function mousePressed(){
	//.html changes the content in a object
	h1.html("Jon Chambers");
	createP("click" + mouseX);

}
function draw() {
  // put drawing code here
  clear();
  background(0);
  fill(255, 0 ,0);
  ellipse(x, y, 100, 100)
  x = x + random(-5, 5);
  //we can animate elements in draw
  h1.position(x, y);
}