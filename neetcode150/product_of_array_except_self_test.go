package main

import (
	"testing"
)

func productExceptSelf(nums []int) []int {
	res := make([]int, len(nums))

	prefix := 1
	suffix := 1

	l := len(nums)

	for i := 0; i < l; i++ {
		if i == 0 {
			res[i] = 1
			prefix = 1
		} else {
			prefix = nums[i-1] * prefix
			res[i] = prefix
		}
	}
	l = l - 1
	for i := l; i >= 0; i-- {
		if i == l {
			suffix = 1
			res[i] = res[i] * suffix
		} else {
			suffix = nums[i+1] * suffix
			res[i] = res[i] * suffix
		}
	}

	return res
}

func Test_productExceptSelf(t *testing.T) {
	t.Log("Product except self", productExceptSelf([]int{1, 2, 3, 4}))
	t.Log("Product except self", productExceptSelf([]int{-1, 1, 0, -3, 3}))
}
