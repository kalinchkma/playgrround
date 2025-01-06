package main

import "log"

func main() {
	traiangle := TriangularObject{
		height: 1,
		base:   2,
		length: 3,
	}

	volumeCalculator := VolumeCalculator{
		object: traiangle,
	}
	volume := volumeCalculator.Volume()

	log.Println(volume)
}

// Encapsulated Object
type Object interface {
	Perimeter() float64
	Height() float64
}

// Features object
type VolumeCalculator struct {
	object Object
}

func (calculator VolumeCalculator) Volume() float64 {
	return calculator.object.Perimeter() * calculator.object.Height()
}

// Implementation of object: trangular
type TriangularObject struct {
	height float64
	base   float64
	length float64
}

func (t TriangularObject) Perimeter() float64 {
	return t.height * t.base / 2
}

func (t TriangularObject) Height() float64 {
	return t.length
}
