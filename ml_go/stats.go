package main

func Min(x []float64) float64 {
	return x[0]
}

func Max(x []float64) float64 {
	return x[len(x)-1]
}

func MeanValue(x []float64) float64 {
	sum := float64(0)
	for _, v := range x {
		sum = sum + v
	}

	return sum / float64(len(x))
}

func MedianValue(x []float64) float64 {
	length := len(x)
	if length%2 == 1 {
		return x[(length-1)/2]
	} else {
		return (x[length/2] + x[(length/2)-1]) / 2
	}
}

func Variance(x []float64) float64 {
	mean := MeanValue(x)
	sum := float64(0)

	for _, v := range x {
		sum = sum + (v-mean)*(v-mean)
	}

	return sum / float64(len(x))
}
