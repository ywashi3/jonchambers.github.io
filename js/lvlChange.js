function beginning(){
	background(0);
	greeting = createP("Please type you name and press enter");
 	
 	createElement('br');

 	nameInput = createInput("type your name");
 	nameInput.changed(startStory);
}

function startStory(){
	greeting.hide();
	nameInput.hide();
	namep = createElement('h1', nameInput.value())

	Title = createElement('h1' , 'Get home before the sun sets');
 	FirstOption = createA("#" , "walk towards home");
 	createElement('br');
 	SecondOption = createA("#" , "walk towards the sun");
 	 

 	FirstOption.mousePressed(toHome);
 	SecondOption.mousePressed(toSun);
}
 
function toHome(){

	FirstOption.hide();
	SecondOption.hide();
	Title.hide();
	namep.html(nameInput.value());
	firstTitle = createP("You have gone home. Good night")
	//firstTitle.html('You have gone home. Good night');

  	bgcolor = color(random(255)); 
}

function toSun(){
	
	walkToSun = true;


	namep.html(nameInput.value());
	
	Title.html('You walk towards the sun, it gets bigger.');
	FirstOption.html("walk closer");
 	SecondOption.html("control the sun set");

 	FirstOption.mousePressed(closerSun);
 	SecondOption.mousePressed(controlSun);

  	bgcolor = color(random(255));
}

function closerSun(){
	FirstOption.hide();
	SecondOption.hide();
	namep.html(nameInput.value());
	sunAnimate = true;
	walkToSun = false;
	Title.html('Drifting towards the sun');
	sunX = windowWidth/2;
}


function controlSun(){
	walkToSun = false;
	controlSunBool = true;

	FirstOption.hide();
	SecondOption.hide();
	
	sunSlider = createSlider(0, 255, 0);
	
}