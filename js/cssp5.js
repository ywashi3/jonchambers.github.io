var canvas;
var bgcolor;
var txt;
var styleButton;

function setup(){
	canvas = createCanvas(400,400);
	bgcolor = color(51);
	txt = createP('some text here')
	
	styleButton = createButton('click to change color');
	styleButton.mousePressed(changeStyle);
	
}


function changeStyle() {

	txt.style("background-color", "pink");
}

function changeBG() {

	bgcolor = color(random(155));
}

function draw(){
	background(bgcolor);
	fill(255, 0, 175);
	ellipse(100, 100, 70, 70);

}