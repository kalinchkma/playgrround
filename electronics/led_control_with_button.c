
#define LED_PIN 8
#define BUTTON_PIN 7

byte lastButtonState = LOW;
byte ledState = LOW;

unsigned long lastTimeButtonStateChange = millis();
unsigned long debounce = 50;

void setup() 
{
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);
}

void loop()
{

  if (millis() - lastTimeButtonStateChange >= debounce) {
    byte currentButtonState = digitalRead(BUTTON_PIN);
    if (currentButtonState != lastButtonState) {
      lastTimeButtonStateChange = millis();
      lastButtonState = currentButtonState;
      if (currentButtonState == LOW) {
        ledState = (ledState == HIGH) ? LOW : HIGH;
        digitalWrite(LED_PIN, ledState);
      } 
    }
  }

}
