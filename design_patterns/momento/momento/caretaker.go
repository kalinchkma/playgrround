package momento

import "errors"

type Caretaker struct {
	content []Momento
}

func NewCaretaker() *Caretaker {
	return &Caretaker{content: make([]Momento, 0)}
}

func (c *Caretaker) Store(m Momento) {
	c.content = append(c.content, m)
}

func (c *Caretaker) Last() (Momento, error) {
	if len(c.content) == 0 {
		return nil, errors.New("no momento available")
	}

	lastMementoIndex := len(c.content) - 1
	lastMemento := c.content[lastMementoIndex]

	c.content = c.content[:lastMementoIndex]
	return lastMemento, nil
}
