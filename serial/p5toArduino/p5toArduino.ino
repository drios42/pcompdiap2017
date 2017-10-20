int counter = 0;
int led = 7;

void setup() {
  Serial.begin(9600);
  pinMode(led, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    int incoming = Serial.read();
    if (incoming == '1' ) {
      digitalWrite(led, HIGH);
    }
    if (incoming == '0' ) {
      digitalWrite(led, LOW);
    }

  }
}
