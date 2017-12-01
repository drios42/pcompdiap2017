/**
 * @name Frequency Spectrum
 * @description <p>Visualize the frequency spectrum of live audio input.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
var mic, fft, file;
var nodes = [];
var angle = 0;

function preload() {
  //file = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  file = loadSound('assets/Damscray_DancingTiger.mp3');
}

function setup() {

  createCanvas(900, 700);
  noFill();

  osc = new p5.Oscillator(); // set frequency and type
  osc.setType('sine');

  osc.freq(240);
  osc.amp(0.5);
  osc.start();

  osc2 = new p5.Oscillator(); // set frequency and type
  osc2.setType('square');

  osc2.freq(240);
  osc2.amp(0.5);
  osc2.start();

  fft = new p5.FFT();

  fft.setInput(osc);

  fft2 = new p5.FFT();

  fft2.setInput(osc2);
  //  file.loop();
  //file.play();

  for (i = 0; i < fft.bins; i++) {
    nodes[i] = new NodeBlob(i + 10, 0, color(255, 255, 255), 2);
  }
}

function draw() {
  background(0);
  var val = map(mouseX, 0, width, 0, 1000);
  var val2 = map(mouseY, 0, width, 0, 1000);
  osc.freq(val);
  osc2.freq(val2);


  var spectrum = fft.analyze();
  var spectrum2 = fft2.analyze();
  beginShape();
  noFill();
  stroke(255, 0, 255);
  for (i = 0; i < spectrum.length; i++) {

    //  var r = map(i, 0, spectrum.length - 1, 0, 255);
    vertex(i * 20, map(spectrum[i], 0, 255, (height / 4) * 3, 10));
    // nodes[i].y = map(spectrum[i], 0, 255, height - 50, 10);
    // var g = map(spectrum[i], 0, 255, 255, 0);

    // nodes[i].col = color(255, 255, g);
    // nodes[i].show();
  }
  noFill();
  endShape();



  for (i = 0; i < spectrum2.length; i++) {

    var r = map(i, 0, spectrum2.length - 1, 0, 255);
    vertex(i * 4, map(spectrum2[i], 0, 255, height - 50, 10));
    nodes[i].y = map(spectrum2[i], 0, 255, height - 50, 10);
    var g = map(spectrum2[i], 0, 255, 255, 0);

    nodes[i].col = color(255, 255, g);
    nodes[i].show();
  }
  noFill();
  endShape();


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