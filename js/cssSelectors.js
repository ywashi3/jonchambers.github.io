var unicorn;
var rainbow;
var para;
var allPara;

function setup(){
	createCanvas(200, 200);
	background(0);
	unicorn = select('#unicorn');

	//unicorn.mouseOver(changeBG);
	
	rainbow = selectAll('.rainbow');
	allPara = selectAll('p');

	for (var i = 0; i<allPara.length; i++){

		allPara[i].mouseOver(highlight);
		allPara[i].mouseOut(unhighlight);
	}

}
 
 function highlight(){
 	this.style('background-color', 'purple');
 }

 function unhighlight(){
 	this.style('background-color', 'pink');
 }

 function changeCanvas(){

 	background(random(255));
 }


function draw(){


}