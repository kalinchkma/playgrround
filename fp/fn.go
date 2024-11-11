package main

/**
* First class: A function that treated  as a value
* Highter order: A function that takes a function as an argument
 */

// This function is a pure function
// Cause it dose not have side effect
func Add(x int, y int) int {
	return x + y
}

// This function is a Higher order function
// This function also used Add function as a first class function
func ListAdd10(add func(int, int) int, lst []int) []int {
	cp := []int{}
	// useing add argument function as a first class function
	ad := add
	for _, v := range lst {
		cp = append(cp, ad(v, 10))
	}
	return cp
}

// Closures:
// A closure is a function that reference variable from outside its own function body
func Entity() func() int {
	counter := 0
	return func() int {
		counter++
		return counter
	}
}

// Currying:
// Function curring is a specific kind of function transformation where we translate a single function
// that accepts mutiple arguments into multiple functions that each accept a single argument
func CurrySum(x int) func(int) int {
	return func(y int) int {
		return x + y
	}
}

// Decorator:
// Decorators are just syntactic sugar for higher order functions
