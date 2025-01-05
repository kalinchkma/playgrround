package originatio

import (
	"momento/human"
	"momento/momento"
)

// Interfaces
type Originator interface {
	Save() momento.Momento
	Restore(m momento.Momento)
}

// Implementation
type HumanOriginator struct {
	human human.Human
}

// Constructor
func NewHumanOriginator() *HumanOriginator {
	return &HumanOriginator{human: *human.NewHuman()}
}

func (originatio *HumanOriginator) Save() momento.Momento {
	return momento.NewHumanMomento(originatio.human)
}

func (originator *HumanOriginator) Restore(m momento.Momento) {
	originator.human = m.Restore().(human.Human)
}

func (originator *HumanOriginator) Get() human.Human {
	return originator.human
}

func (originator *HumanOriginator) Set(human human.Human) {
	originator.human = human
}
