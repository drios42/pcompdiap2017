var video;
var output;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    output = createImage(640, 480);
    output.loadPixels();
}

function draw() {
    background(255);
    video.loadPixels();


    for (var i = 0; i < video.pixels.length; i += 4) {
        var r = video.pixels[i];
        var g = video.pixels[i + 1];
        var b = video.pixels[i + 2];
        var a = video.pixels[i + 3];

        output.pixels[i] = r;
        output.pixels[i + 1] = r;
        output.pixels[i + 2] = r;
        output.pixels[i + 3] = a;

    }
    output.updatePixels();
    image(output, 0, 0);
}
