package main

import "log"

func main() {
	m := MultiplyHandler{}
	m2 := MultiplyHandler{}
	a := AdditionHandler{}

	m.SetNextHandler(&m2)
	m2.SetNextHandler(&a)

	r := Request{number: 2}
	m.Handle(r)
}

// Interface and model
type Request struct {
	number int
}

type Handler interface {
	Handle(request Request)
	SetNextHandler(handler Handler)
}

// First handler
type MultiplyHandler struct {
	nextHandler *Handler
}

func (m MultiplyHandler) Handle(request Request) {
	result := Request{number: request.number * 2}
	log.Print(result)

	if m.nextHandler != nil {
		(*m.nextHandler).Handle(result)
	}
}

func (m *MultiplyHandler) SetNextHandler(handler Handler) {
	m.nextHandler = &handler
}

// Second handler
type AdditionHandler struct {
	nextHandler *Handler
}

func (a *AdditionHandler) Handle(request Request) {
	result := Request{number: request.number + 10}
	log.Print(result)

	if a.nextHandler != nil {
		(*a.nextHandler).Handle(result)
	}
}

func (a *AdditionHandler) SetNextHandler(handler Handler) {
	a.nextHandler = &handler
}
