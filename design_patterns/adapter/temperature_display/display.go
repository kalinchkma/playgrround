package temperaturedisplay

import (
	temperatureprovider "adapter/temperature_provider"
	"log"
)

type CelsiusTemperatureDisplayer struct {
}

func (displayer *CelsiusTemperatureDisplayer) Display(celsiusProvider temperatureprovider.TemperatureProvider) {
	log.Printf("temperature in celsius %d", celsiusProvider.GetCelsius())
}
