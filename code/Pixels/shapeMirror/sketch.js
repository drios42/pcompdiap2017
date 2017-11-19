var video;
var output;
var threshold = 5;

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    output = createImage(640, 480);
    output.loadPixels();
}

function draw() {
    background(0);
    video.loadPixels();
    noStroke();
    fill(255);

    for (var y = 0; y < video.height; y++) {
        for (var x = 0; x < video.width; x++) {

            var loc = (x + y * video.width) * 4;
            var r = video.pixels[loc];
            var g = video.pixels[loc + 1];
            var b = video.pixels[loc + 2];
            var a = video.pixels[loc + 3];

            var brightness = (r + g + b) / 3;

            if (brightness < threshold) {
                output.pixels[loc] = 255;
                output.pixels[loc + 1] = 0;
                output.pixels[loc + 2] = 0;
                output.pixels[loc + 3] = a;
            } else {
                output.pixels[loc] = 0;
                output.pixels[loc + 1] = 0;
                output.pixels[loc + 2] = 0;
                output.pixels[loc + 3] = a;
            }
        }
    }
    output.updatePixels();
    image(output, 0, 0);
}

function keyTyped() {
    if (key == 'a') {
        threshold = threshold - 5;
    }

    if (key == 'f') {
        threshold = threshold + 5;
    }

}
