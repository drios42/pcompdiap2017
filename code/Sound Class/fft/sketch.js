/**
 * @name Frequency Spectrum
 * @description <p>Visualize the frequency spectrum of live audio input.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
var mic, fft, file;
var nodes = [];

function preload() {
  file = loadSound('assets/lucky_dragons_-_power_melody.mp3');
}

function setup() {
  createCanvas(710, 400);
  noFill();
//
//  mic = new p5.AudioIn();
//  mic.start();

  fft = new p5.FFT();

  fft.setInput(file);
  file.loop();
  //file.play();

  for (i = 0; i < fft.bins; i++) {
    nodes[i] = new NodeBlob(i, 0, color(255, 255, 255), 4);
  }
}

function draw() {
  background(0);

  var spectrum = fft.analyze();
  noFill();
  stroke(255,255,0);
 
 // beginShape();

  for (var i = 0; i < spectrum.length; i++) {
    //vertex(i, map(spectrum[i], 0, 255, height, 0));

      line(i, height, i, map(spectrum[i], 0, 255, height, 0));
    // nodes[i].y = map(spectrum[i], 0, 255, height, 0);
    // var g = map(spectrum[i], 0, 255, 255, 0);
    // nodes[i].col = color(255, 255, g);
    // nodes[i].show();

  }
 // endShape();
}

function NodeBlob(x, y, col, sz) {
  this.x = x;
  this.y = y;
  this.col = col;
  this.sz = sz;

  this.show = function() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.sz, this.sz);
  }
}