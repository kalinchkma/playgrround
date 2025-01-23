package main

import (
	"sort"
	"testing"
)

type PriorityQueue struct {
	items []struct {
		value    int
		priority int
	}
}

func (pq *PriorityQueue) Enqueue(value int, priority int) {
	pq.items = append(pq.items, struct {
		value    int
		priority int
	}{value: value, priority: priority})

	sort.Slice(pq.items, func(i, j int) bool {
		return pq.items[i].priority < pq.items[j].priority
	})
}

func (pq *PriorityQueue) Dequeue() (struct {
	value    int
	priority int
}, bool) {
	if len(pq.items) == 0 {
		return struct {
			value    int
			priority int
		}{}, false
	}
	item := pq.items[0]
	pq.items = pq.items[1:]
	return item, true
}

func topKFrequent2(nums []int, k int) []int {
	if len(nums) == k {
		return nums
	}

	hashMap := make(map[int]int, len(nums))
	for _, v := range nums {
		hashMap[v]++
	}
	queue := PriorityQueue{
		items: []struct {
			value    int
			priority int
		}{},
	}
	for i, v := range hashMap {
		queue.Enqueue(i, v)
		if len(queue.items) > k {
			queue.Dequeue()
		}
	}
	ans := []int{}
	for _, v := range queue.items {
		ans = append(ans, v.value)
	}
	return ans
}

func topKFrequent(nums []int, k int) []int {
	if len(nums) == k {
		return nums
	}

	hashMap := make(map[int]int)
	for _, i := range nums {
		hashMap[i]++
	}

	ls := [][]int{}

	for k, v := range hashMap {
		ls = append(ls, []int{k, v})
		sort.Slice(ls, func(i, j int) bool {
			return ls[i][1] > ls[j][1]
		})
	}
	res := []int{}
	for i := 0; i < k; i++ {
		res = append(res, ls[i][0])
	}
	return res
}

func Test_topKFrequent(t *testing.T) {
	t.Log(topKFrequent2([]int{1, 1, 1, 1, 9, 9, 9, 3, 3, 3, 3, 3, 8, 8}, 3))
	t.Log(topKFrequent([]int{1, 1, 1, 1, 9, 9, 9, 3, 3, 3, 3, 3, 8, 8}, 3))
}
