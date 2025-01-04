package temperatureprovider

import temperaturemodel "adapter/temperature_model"

type TemperatureProvider interface {
	GetCelsius() temperaturemodel.Celsius
}
