package temperatureprovider

import (
	temperaturemodel "adapter/temperature_model"
	"math/rand"
	"time"
)

type Random struct {
}

// Unique available function that need to implement adapter
// to align
func (provider Random) GetFarenheit() temperaturemodel.Fahrenheit {
	seedSource := rand.NewSource(time.Now().UnixNano())
	seed := rand.New(seedSource)
	return temperaturemodel.Fahrenheit(seed.Intn(170))
}
