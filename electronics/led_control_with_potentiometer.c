
#define RED_PIN 9
#define GREEN_PIN 6
#define BLUE_PIN 10
#define POTENTIOMETER_PIN A3


void setup() {
  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
  pinMode(BLUE_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int data = analogRead(POTENTIOMETER_PIN);
  int value = map(data, 0, 1023, 0, 100);
  int led_choice = 0;
  if (value > 40 && value < 70) {
    led_choice = 1;
  } else if (value >= 70) {
    led_choice = 2;
  }
  
  if (led_choice == 0) {
    digitalWrite(RED_PIN, HIGH);
    digitalWrite(GREEN_PIN, LOW);
    digitalWrite(BLUE_PIN, LOW);
  } else if (led_choice == 1) {
    digitalWrite(RED_PIN, LOW);
    digitalWrite(GREEN_PIN, HIGH);
    digitalWrite(BLUE_PIN, LOW);
  } else {
  
    digitalWrite(RED_PIN, LOW);
    digitalWrite(GREEN_PIN, LOW);
    digitalWrite(BLUE_PIN, HIGH);
  }
  Serial.println(value);
}
