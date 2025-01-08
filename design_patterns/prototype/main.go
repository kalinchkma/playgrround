package main

import "prototype/publisher"

func main() {
	p := publisher.NewBookPublisher()

	run(p, "This is the time to goodbye")

	p1 := p.Clone().(publisher.IPublisher)

	run(p1, "new Cpu")
}

func run(publisher publisher.IPublisher, msg string) {
	publisher.Publish(msg)
}
