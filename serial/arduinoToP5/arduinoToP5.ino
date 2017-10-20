int counter = 0;
int button = 8;

void setup() {
  Serial.begin(9600);
  pinMode(button, INPUT);
}

void loop() {
  int reading = digitalRead(button);
  if (reading == 1) {
    counter++;
     Serial.write(counter);
  } else {
  }

  if (counter > 255) {
    counter = 0;
  }
}
