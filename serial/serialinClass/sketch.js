var serial;

var inData;

var portName = '/dev/cu.usbmodem1411';
var ledon=false;


function setup() {
    createCanvas(windowWidth, windowHeight);
    serial = new p5.SerialPort(); // make a new instance of the serialport library
    serial.on('connected', serverConnected); // callback for connecting to the server
    serial.on('open', portOpen); // callback for the port opening
    serial.on('data', serialEvent); // callback for when new data arrives
    serial.on('error', serialError); // callback for errors
    serial.on('close', portClose); // callback for the port closing
    serial.open(portName); // open a serial port
}


function draw() {
    background(255);
    ellipse(width / 2, height / 2, inData, inData);  
}

function mousePressed(){
    ledon = !ledon;
     if(ledon){
        serial.write('1');
         console.log(1);
    }else{
        serial.write('0');
        console.log(1);
    } 
    
}

function serialEvent() {
    inData = Number(serial.read());
    console.log(inData);
}

















function serialError(err) {
    console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
    console.log('The serial port closed.');
}

function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port opened.');
}
