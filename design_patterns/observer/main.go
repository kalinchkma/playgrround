package main

import (
	"fmt"
	"log"
	"math/rand"
)

func main() {
	var p Publisher = newPublisher()
	p.broadcast("hello")

	s := newSubscriber("123")

	p.addSubscriber(s)

	p.broadcast("hello again")

	a1 := newAutoGenerateIdSubscriber()

	p.addSubscriber(a1)

	p.broadcast("Hello with auto id")

}

// Interfaces
type Publisher interface {
	addSubscriber(subscriber Subscriber)
	removeSubscriber(subId string)
	broadcast(msg string)
}

type Subscriber interface {
	id() string
	react(msg string)
}

// Implementation > Publisher
type publisher struct {
	subscribers map[string]Subscriber
}

func newPublisher() publisher {
	return publisher{subscribers: make(map[string]Subscriber)}
}

func (p publisher) addSubscriber(subscriber Subscriber) {
	p.subscribers[subscriber.id()] = subscriber
}

func (p publisher) removeSubscriber(subId string) {
	delete(p.subscribers, subId)
}

func (p publisher) broadcast(msg string) {
	for _, subscriber := range p.subscribers {
		subscriber.react(msg)
	}
}

// Implementation > Subscriber
type subscriber struct {
	subId string
}

func newSubscriber(subId string) subscriber {
	return subscriber{subId: subId}
}

func (s subscriber) id() string {
	return s.subId
}

func (s subscriber) react(msg string) {
	log.Printf("ID %s - recived: %s", s.subId, msg)
}

// Implemention > auto-generated ID Subscriber
type autoGenerateIdSubscriber struct {
	subId string
}

func newAutoGenerateIdSubscriber() *autoGenerateIdSubscriber {
	return &autoGenerateIdSubscriber{subId: fmt.Sprint(rand.Int())}
}

func (a autoGenerateIdSubscriber) id() string {
	return a.subId
}

func (a autoGenerateIdSubscriber) react(msg string) {
	log.Printf("ID %s - auto generated recived: %s", a.subId, msg)
}
