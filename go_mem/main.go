package main

func main() {
	n := 4
	inc(&n)
	println(n)
}

func inc(n *int) {
	*n++
}
