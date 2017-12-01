var osc;
var frq = 30;
var fft;
var ctrl;
var btn;

var osc2;
var frq2 = 30;
var fft2;
var ctrl2;
var btn2;

var c1 = 0;
var c2 = 0;

function setup() {
    ctrl = createSlider(0, 800, 20, 2);
    btn = createButton("oscillator 1");
    btn.mousePressed(volumechange);

    ctrl2 = createSlider(0, 800, 20, 2);
    btn2 = createButton("oscillator 2");
    btn2.mousePressed(volumechange2);

    createCanvas(windowWidth, windowHeight - 100);


    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.freq(frq);
    osc.amp(0);
    osc.start();

    osc2 = new p5.Oscillator();
    osc2.setType('sine');
    osc2.freq(frq);
    osc2.amp(0);
    osc2.start();

    fft = new p5.FFT();
    fft2 = new p5.FFT();
}

function draw() {
    background(0);

    frq = ctrl.value();
    frq2 = ctrl2.value();

    textSize(44);
    text("Frequency of Osc1: " + frq + "  Frequency of Osc2: " + frq2, 20, 50);


    var spectrum = fft.analyze();
    var spectrum2 = fft2.analyze();

    var wave = fft.waveform();
    var wave2 = fft2.waveform();

    noFill();

    beginShape();
    stroke(0, 255, 0);
    for (var i = 0; i < wave.length; i++) {
        var x = map(i, 0, wave.length, 0, width);
        var y = map(wave[i], -1, 1, height * .98, height * .02);
        vertex(x, y);
    }
    endShape();

    stroke(255, 0, 0)

    beginShape();

    for (var i = 0; i < wave2.length; i++) {
        var x = map(i, 0, wave2.length, 0, width);
        var y = map(wave2[i], -1, 1, height * .98, height * .02);
        vertex(x, y);
    }
    endShape();

    osc.freq(frq);
    osc2.freq(frq2);
    // osc.amp(vol);
    // console.log(wave.length);

}

function volumechange() {
    if (c1 == 0) {
        osc.amp(.95, 0.3);
    }else{
        osc.amp(0, 0.3);
    }
    c1++;
    c1=c1 % 2;
}

function volumechange2() {

  if (c2 == 0) {
        osc2.amp(.95, 0.3);
    }else{
        osc2.amp(0, 0.3);
    }
    c2++;
    c2 = c2 %2;
}
