var canvas;

//screen text
var greeting;
var title;
var firstOption;
var secondOption;
var userName;

//inputs
var nameInput;

//animation variables
var sunX;
var sunY;

var sunSlider;

//boolean
var firstScreen;
var walkToSun;
var sunAnimate;
var walkCloser;

//images
var spaceBG;

//sounds
var modem;


function preload(){

	spaceBG = loadImage('./images/space.png');
	modem = loadSound('./audio/modem.mp3');
}

function setup(){

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");

	beginning();
}


function draw(){
	background(0);
	if(walkToSun == true){
		toSunAnim();
	}else if(walkCloser == true){
		walkCloserAnim();
	}

}


function windowResized(){
	canvas = createCanvas(windowWidth, windowHeight);

}