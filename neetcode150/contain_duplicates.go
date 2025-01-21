package main

import "fmt"

func containsDuplicate(nums []int) bool {
	hashSet := make(map[int]struct{}, len(nums))
	for _, v := range nums {
		if _, ok := hashSet[v]; ok {
			return true
		}
		hashSet[v] = struct{}{}
	}
	return false
}

func main() {
	nums := []int{1, 1, 3, 1}
	fmt.Println(containsDuplicate(nums))
}
