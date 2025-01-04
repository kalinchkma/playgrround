package main

import (
	temperaturedisplay "adapter/temperature_display"
	temperatureprovider "adapter/temperature_provider"
)

func main() {
	displayer := temperaturedisplay.CelsiusTemperatureDisplayer{}

	staticProvider := temperatureprovider.Static{}

	randomProvider := temperatureprovider.Random{}

	randomAdaper := temperatureprovider.NewRandomAdapter(randomProvider)

	displayer.Display(staticProvider)

	displayer.Display(randomAdaper)
}
