package main

import (
	"log"
	"singleton/generator"
	idservice "singleton/id_service"
)

func main() {
	var idService idservice.SingletonIDService

	s1 := idService.GetService()

	u1 := NewUser().withId(s1.Next())
	u2 := NewUser().withId(s1.Next())

	log.Println(u1)
	log.Println(u2)

	s2 := idService.GetService()

	u3 := NewUser().withId(s2.Next())
	log.Println(u3)

	// thread safe id service
	for i := 0; i < 100; i++ {
		s4 := generator.GetIDService()
		s5 := generator.GetIDService()
		log.Println(s4.New(), s5.New())
	}
}

// users
type User struct {
	id int
}

func NewUser() User {
	return User{}
}

func (u User) withId(id int) User {
	u.id = id
	return u
}
