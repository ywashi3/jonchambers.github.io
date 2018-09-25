function toHomeAnim(){


}

function toSunAnim(){
	background(sunSetImage);

}

function closerSunAnim(){
	background(outerSpace);
	
	fill(random(255), 0, 0);

	 sunX = sunX + random(-5,5);
	 sunY = 200;
	ellipse(sunX, sunY, 100, 100);
	ellipse(windowWidth/2, windowHeight/2, 100, 100)
} 

function controlSunAnim(){
		background(outerSpace);
		fill(sunSlider.value(), 0,0);
		ellipse(windowWidth/2, windowHeight/2, sunSlider.value(), sunSlider.value())
		if (sunSlider.value() > 150){
		Title.html('the sun is too big!!');
	}else{
		Title.html('control the sun');
	}

}


