int rLed = 13;
int gLed = 12;
int yLed= 11;

int button = 5;
int reading;

boolean hasBeenPressed = false;
boolean rledOn = false;

void setup() {
  Serial.begin(9600);
  pinMode(rLed, OUTPUT);
  pinMode(gLed, OUTPUT);
  pinMode(button, INPUT);
}

void loop() {
  reading = digitalRead(button);

  Serial.println(rledOn);

  if (reading == 1) {
    if (hasBeenPressed == false) {
      rledOn = !rledOn;
      hasBeenPressed = true;
    }
  }

  if (reading == 0) {
    hasBeenPressed = false;
  }

  if (rledOn == true) {
    digitalWrite(rLed, HIGH);
  }

  if (rledOn == false) {
    digitalWrite(rLed, LOW);
  }

}




