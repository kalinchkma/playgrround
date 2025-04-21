#define POTENTIOMETER_PIN A1
#define LED_PIN 11

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  // Serial.println(analogRead(POTENTIOMETER_PIN));
  int data = analogRead(POTENTIOMETER_PIN);
  int percentage = map(data, 0, 1023, 0, 100);
  analogWrite(LED_PIN, data);
  Serial.print("Potentiometer at");
  Serial.print(percentage);
  Serial.print("%");
  Serial.println();

}
