package publisher

import (
	"fmt"
	"log"
	"math/rand"
)

type IPrototype interface {
	Clone() interface{}
}

type IPublisher interface {
	IPrototype
	Publish(message string)
}

type BookPublisher struct {
	id string
}

func (p BookPublisher) Clone() interface{} {
	return BookPublisher{
		id: p.id,
	}
}

func NewBookPublisher() *BookPublisher {
	return &BookPublisher{
		id: fmt.Sprint(rand.Int()),
	}
}

func (p *BookPublisher) Publish(msg string) {
	fullMessage := fmt.Sprint("Publisher ", p.id, " > ", msg)
	log.Print(fullMessage)
}
