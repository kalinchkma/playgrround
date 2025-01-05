package main

import (
	"log"
	"momento/momento"
	"momento/originatio"
)

// pre decorate
func init() {
	log.SetFlags(0)
	log.Print("\n")
}

func main() {
	// h := human.NewHuman()
	// h.Display()
	// h.Damage(50)

	// o := originatio.NewHumanOriginator(*h)
	// m := o.Save()

	// newS := m.Restore().(human.Human)
	// newS.Display()

	// h.Damage(25)
	// h.Display()
	// o.Set(*h)
	// h0 := o.Get()
	// h0.Display()

	// o.Restore(m)
	// h1 := o.Get()
	// h1.Display()

	// Init
	caretaker := momento.NewCaretaker()
	orignator := originatio.NewHumanOriginator()

	// First memento
	momento_0 := orignator.Save()
	caretaker.Store(momento_0)

	h0 := orignator.Get()
	h0.Display()
	h0.Damage(75)

	// Second memento
	orignator.Set(h0)
	momento_1 := orignator.Save()
	caretaker.Store(momento_1)

	h0.Damage(50)
	h0.Display()

	// Restoring the last memento
	lastMemento, err := caretaker.Last()
	if err != nil {
		log.Print(err)
	}

	orignator.Restore(lastMemento)

	h1 := orignator.Get()
	h1.Display()

	// Restoring the last memento
	lastMemento, _ = caretaker.Last()
	orignator.Restore(lastMemento)

	h2 := orignator.Get()
	h2.Display()
}
