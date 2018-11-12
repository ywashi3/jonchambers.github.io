// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

var capture;
var tracker
var w = 640,
    h = 480;

var mask;
var smileDist;
function preload(){
    mask = loadImage("tiger.png");
}

function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();

    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
}

function draw() {
    imageMode(CENTER); 

    image(capture, w/2, h/2, w, h);
    var positions = tracker.getCurrentPosition();

    noFill();
    stroke(255);
    beginShape();
    for (var i = 0; i < positions.length; i++) {
        vertex(positions[i][0], positions[i][1]);
    }
    endShape();

    noStroke();
    for (var i = 0; i < positions.length; i++) {
        fill(map(i, 0, positions.length, 0, 360), 50, 100);
        fill(200, 40, 100);
        stroke(0);
       // ellipse(positions[i][0], positions[i][1], 4, 4);
       //  text(i, positions[i][0], positions[i][1]);
ellipse(positions[62][0], positions[62][1], 50, 50);
        smileDist = dist(positions[44][0], positions[44][1], positions[50][0], positions[50][1]);
        console.log(smileDist);
        

    } 

    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        if(smileDist > 80){
            text("smile", 0, 40);
        }
        image(mask, positions[62][0], positions[62][1], 270, 270);
        // uncomment the line below to show an estimate of amount "smiling"
         //rect(20, 20, smile * 3, 20); 

        // uncomment for a surprise
        noStroke();
        // fill(0, 255, 255);
        // ellipse(positions[62][0], positions[62][1], 50, 50);
    }
}
