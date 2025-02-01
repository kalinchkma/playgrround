package main

import (
	"fmt"
	"runtime"
	"unsafe"
)

type User struct {
	Name string
}

func main() {
	// bst := BSTNode[User]{}
	// bst.Insert(User{Name: "hunter"}, 10)
	// bst.Insert(User{Name: "Lucy"}, 2)
	// bst.Insert(User{Name: "Arza"}, 11)
	// fmt.Println("Default bst root", bst, "\nRight", bst.Right, "\nLeft", bst.Left)
	var mem, mem2 runtime.MemStats
	data := make([]byte, 1024*1024*50) // 50 MB allocated
	runtime.ReadMemStats(&mem)
	fmt.Println("Memory allocated", mem.Alloc)
	fmt.Println("Size of variable", unsafe.Sizeof(data))
	// Clear reference
	data = nil

	fmt.Println("Total memory", float64(mem.Alloc)/1024/1024, mem.HeapAlloc)

	fmt.Println("Forcing GC...")
	runtime.GC()

	runtime.ReadMemStats(&mem2)
	fmt.Println("Cleaning....")
	fmt.Println("Memory alloc", float64(mem2.Alloc)/1024/1024, float64(mem2.HeapAlloc)/1024/1024)
}
