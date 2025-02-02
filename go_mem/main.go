package main

func main() {
	x := 'A'

	NotEscape(&x)

	println(x)

	// This will escapes to heap
	z := Escape(10)

	println(z)
}

func NotEscape(x *rune) {
	*x++
}

// This local variable move to the heap
func Escape(x int) *int {
	y := x * 10
	return &y
}
