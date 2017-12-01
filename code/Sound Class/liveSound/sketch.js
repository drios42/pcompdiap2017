
var input;
var analyzer;

function setup() {
  createCanvas(710, 400);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  var h = map(vol, 0, .25, height, 0);
  ellipse(width/2, h - 25, 50, 50);
  // textSize(30);
  // text("Raw Volume Values: "+vol, 10,50);
    console.log(vol);
}
