var textBox;
var slider;
var para;


function setup(){
	noCanvas();
	para = createP('starting text');
	textBox = createInput('enter text');
	slider = createSlider(10, 64, 16);
	
	//occurs when user changes action: hit enter
	textBox.changed(changedText);
	slider.input(updateFontSize);
}

function updateFontSize(){

	para.style("font-size", slider.value() + "px");
}
function changedText() {

	para.html(textBox.value());
}


function draw(){


}