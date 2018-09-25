var canvas;

//screen text
var Title;
var FirstOption;
var SecondOption;


var toSunFirstOption;
var toSunSecondOption;

//inputs
var nameInput;

var greeting;

var bgcolor;

var sunSlider;


//images
var sunSetImage;
var outerSpace;

//animation Variables
var sunX;
var sunY;

//booleans
var firstScreen;
var walkToSun;
var sunAnimate = false;
var controlSunBool = false;
function setup() {

	canvas = createCanvas(windowWidth, windowHeight);
 	canvas.position(0,0);
 	canvas.style('z-index', '-1');

 	sunSetImage = loadImage("./images/sunset.jpg");
 	outerSpace = loadImage("./images/space.png")
 	beginning();
 	
 	bgcolor = 200;

}






function draw() {
  // put drawing code here
  print(sunAnimate);
  if (walkToSun == true){
  	toSunAnim();

  }else if (sunAnimate == true){
  	closerSunAnim();
  }else if (controlSunBool == true){
  	controlSunAnim();
  }else{
  	background(0);
  }
  


  function windowResized(){

	canvas = createCanvas(windowWidth, windowHeight);
}
 
 
}








