package temperatureprovider

import temperaturemodel "adapter/temperature_model"

type Static struct {
}

func (provider Static) GetCelsius() temperaturemodel.Celsius {
	return 2
}
