package main

import (
	"reflect"
	"sort"
	"testing"
)

func groupAnagrams(strs []string) [][]string {
	if len(strs) == 0 {
		return [][]string{}
	}

	listMap := make(map[string][]string)

	for _, i := range strs {
		runes := []rune(i)
		sort.Slice(runes, func(i, j int) bool {
			return runes[i] < runes[j]
		})
		key := string(runes)

		listMap[key] = append(listMap[key], i)

	}
	res := [][]string{}
	for _, v := range listMap {
		res = append(res, v)
	}
	return res
}

func Test_group_anagrame(t *testing.T) {
	if reflect.DeepEqual(groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"}), [][]string{{"ate", "eat", "tea"}, {"nat", "tan"}, {"bat"}}) {
		t.Log("Pass - group anagrame")
	} else {
		t.Fatal("Failed - group anagrame")
	}
}
