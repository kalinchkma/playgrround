package temperatureprovider

import (
	temperaturemodel "adapter/temperature_model"
	"log"
)

type RandomAdapter struct {
	random Random
}

func NewRandomAdapter(random Random) *RandomAdapter {
	return &RandomAdapter{random: random}
}

func (r RandomAdapter) GetCelsius() temperaturemodel.Celsius {
	f := r.random.GetFarenheit()

	log.Printf("Farenheit: %v", f)

	c := (float64(f) - 32) / 1.8
	return temperaturemodel.Celsius(c)
}
