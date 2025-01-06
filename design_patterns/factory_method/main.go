package main

import "log"

func main() {
	farm(56)
	farm(40)
	farm(20)
}

// Interface
type Animal interface {
	Sound() string
}

// Person
type Person struct {
	age int
}

// Factory method
func NewPerson(yearOfBorn int) *Person {
	return &Person{age: 2024 - yearOfBorn}
}

func (p *Person) Sound() string {
	return "Hello"
}

// Cat
type Cat struct {
	name string
}

// Cat factory method
func NewCat(name string) *Cat {
	return &Cat{name: name}
}

func (c *Cat) Sound() string {
	return "meow"
}

// Dog
type Dog struct {
	name string
}

// Dog factory method
func NewDog(name string) *Dog {
	return &Dog{name: name}
}

func (d *Dog) Sound() string {
	return "woof"
}

// Farm
func farm(x int) {
	var a Animal
	if x > 50 {
		a = NewPerson(1998)
	} else if x >= 40 {
		a = &Dog{}
	} else {
		a = &Cat{}
	}

	s := a.Sound()
	log.Println(s)
}
