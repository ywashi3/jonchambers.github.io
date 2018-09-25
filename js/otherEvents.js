var canvas;
var h1;
var bgcolor;
var button;
var slider;
var br;
var nameInput;
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
 nameP.mouseOver(overNameP);
 nameP.mouseOut(outNameP);
 createElement('br');
 
 slider = createSlider(0, 255, 30);
 slider.addClass('slider');
 createElement('br');
 
 nameInput = createInput("type your name");
 //nameInput.changed(updateText);
 nameInput.input(updateText);
}

function updateText(){
  nameP.html(nameInput.value());
}

function overNameP(){
  nameP.html('over');
}

function outNameP(){
nameP.html('out');

}

function changeColor(){

  bgcolor = color(random(255));
}


function draw() {
  // put drawing code here
  background(bgcolor);
  text(nameInput.value(), 10, 20);
  fill(255, 0 ,0);
  ellipse(100, 100, slider.value(), slider.value())
  //nameP.html(input.value());
  bgcolor = slider.value();
  // if(slider.value() >= 50){

  // 	bgcolor = color(0);
  // }else{
  // 	bgcolor = color(255);

  // }
  //print(slider.value());
}





