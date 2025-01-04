package momento

import "momento/human"

// Interface
type Momento interface {
	Restore() interface{}
}

// Human momento
type HumanMomento struct {
	human human.Human
}

// Constructor
func NewHumanMomento(human human.Human) *HumanMomento {
	return &HumanMomento{human: human}
}

func (momento HumanMomento) Restore() interface{} {
	return momento.human
}
