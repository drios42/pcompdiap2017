int rLed = 13;
int gLed = 12;
int yLed = 11;
int counter = 0;

int button = 5;
int reading;

boolean hasBeenPressed = false;
boolean rledOn = false;

void setup() {
  Serial.begin(9600);
  pinMode(rLed, OUTPUT);
  pinMode(gLed, OUTPUT);
  pinMode(yLed, OUTPUT);
  pinMode(button, INPUT);
}

void loop() {
  reading = digitalRead(button);

  Serial.println(counter);

  if (reading == 1) {
    if (hasBeenPressed == false) {
     counter = counter +1;
      hasBeenPressed = true;
    }
  }
  if (reading == 0) {
    hasBeenPressed = false;
  }

  if (counter == 0) {
    digitalWrite(rLed, LOW);
    digitalWrite(gLed, LOW);
    digitalWrite(yLed, LOW);
  }

  if (counter == 1) {
    digitalWrite(rLed, HIGH);
    digitalWrite(gLed, LOW);
    digitalWrite(yLed, LOW);
  }


  if (counter == 2) {
    digitalWrite(rLed, LOW);
    digitalWrite(gLed, HIGH);
    digitalWrite(yLed, LOW);
  }


  if (counter == 3) {
    digitalWrite(rLed, LOW);
    digitalWrite(gLed, LOW);
    digitalWrite(yLed, HIGH);
  }

  if (counter >= 4) {
    counter = 0;
  }




}




