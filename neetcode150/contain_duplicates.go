package main

func ContainsDuplicate(nums []int) bool {
	hashSet := make(map[int]struct{}, len(nums))
	for _, v := range nums {
		if _, ok := hashSet[v]; ok {
			return true
		}
		hashSet[v] = struct{}{}
	}
	return false
}
