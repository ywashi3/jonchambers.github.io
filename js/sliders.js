var canvas;
var h1;
var bgcolor;
var button;
var slider;
var br;
var input;
var nameP;

function setup() {
  // put setup code here
 
 h1 = createElement('h1', 'My name is...');
 canvas = createCanvas(600, 200);

 canvas.position(0,250);
 bgcolor = 200;
 button = createButton("go, go, go")
 button.mousePressed(changeColor);
   createElement('br');
 nameP = createP("your name");
 createElement('br');
 slider = createSlider(10, 100, 30);
  createElement('br');
  input = createInput("type your name");
}

function changeColor(){

  bgcolor = color(random(255));
}


function draw() {
  // put drawing code here
  background(bgcolor);
  text(input.value(), 10, 20);
  fill(255, 0 ,0);
  ellipse(100, 100, slider.value(), slider.value())
  nameP.html(input.value());

  if(slider.value() >= 50){

  	bgcolor = color(0);
  }else{
  	bgcolor = color(255);

  }
}





