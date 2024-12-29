package main

import "fmt"

type User struct {
	Name string
}

func main() {
	bst := BSTNode[User]{}
	bst.Insert(User{Name: "hunter"}, 10)
	bst.Insert(User{Name: "Lucy"}, 2)
	bst.Insert(User{Name: "Arza"}, 11)
	fmt.Println("Default bst root", bst, "\nRight", bst.Right, "\nLeft", bst.Left)
}
