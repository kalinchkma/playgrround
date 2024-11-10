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
