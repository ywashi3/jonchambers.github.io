var canvas;

var bgColor;

var userName;

var colorButton; 

var paragraph;

var textInput;

var ellipseSlider;

function setup(){

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style("z-index", "-1");
	bgColor = 200;
 
	//create a h1 element
	userName = createElement('h1', '');
	//userName.position(100, 10);

	//create a button element
	colorButton = createButton("Change Color");
	colorButton.mousePressed(changeColor);

	//create paragraph element
	paragraph = createP('this is a paragraph');
	//check to see if the mouse hovers over paragraph
	//paragraph.mouseOver(changeColor);
	//paragraph.mousePressed(changeColor);
	paragraph.mouseOut(changeColor);

	//create text box
	textInput = createInput("Type you name here");
	//textInput.input(updateName);
	textInput.changed(updateName);
	//textInput.changed(updateFontColor);

	createElement('br')
	//create a slider element min, max, start
	ellipseSlider = createSlider(0, 600, 300);

}

function updateName(){

	userName.html(textInput.value());
}

function changeColor(){

	bgColor = color(random(255));
}

function updateFontColor(){

	paragraph.style("color", "red");

}

function draw(){
	background(bgColor);
	
	text(textInput.value(), 400, 100);
	ellipse(width/2, height/2, ellipseSlider.value(), ellipseSlider.value());
	

	if(ellipseSlider.value() > 400){
		fill(0, 255, 0);
		userName.hide();
	}else{ 
		userName.show();
		userName.position(ellipseSlider.value(), 0);
		fill(255, 0, 0);
	}

}







