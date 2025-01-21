package main

import (
	"fmt"
	"reflect"
	"testing"
)

func twoSum(nums []int, target int) []int {
	visited := make(map[int]int, len(nums))
	for i, v := range nums {
		pice := target - v
		if j, ok := visited[pice]; ok {
			return []int{i, j}
		} else {
			visited[v] = i
		}
	}

	return []int{0, 0}
}

func Test_towSum(t *testing.T) {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
	if reflect.DeepEqual(twoSum([]int{2, 7, 11, 15}, 9), []int{1, 0}) {
		t.Log("Pass")
	} else {
		t.Fatalf("Failed")
	}
}
