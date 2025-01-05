package main

import "log"

func main() {
	zingy := NewShop().withName("Zingy").withNumberOfItems(20)

	ziggy := NewShopWithFields("ziggy", 2, 10)

	log.Println(zingy)
	log.Println(ziggy)
	ziggy2 := ziggy.withNumberOfEmployees(50)
	log.Println(ziggy2)
}

// shop with builder patterns
type Shop struct {
	name              string
	numberOfItems     int
	numberOfEmployees int
}

// Constructor
func NewShop() *Shop {
	return &Shop{}
}

// Constructor 2
func NewShopWithFields(name string, items, emplyees int) *Shop {
	return &Shop{
		name:              name,
		numberOfItems:     items,
		numberOfEmployees: emplyees,
	}
}

func (s Shop) withName(name string) Shop {
	s.name = name
	return s
}

func (s Shop) withNumberOfItems(items int) Shop {
	s.numberOfItems = items
	return s
}

func (s Shop) withNumberOfEmployees(employee int) Shop {
	s.numberOfEmployees = employee
	return s
}
