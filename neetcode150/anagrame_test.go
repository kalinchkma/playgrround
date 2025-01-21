package main

import (
	"testing"
)

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	set := make(map[rune]int, len(s))
	for _, v := range s {
		set[v] += 1
	}
	for _, v := range t {
		set[v] -= 1
	}
	for _, v := range set {
		if v != 0 {
			return false
		}
	}

	return true
}

func TestAnagram(t *testing.T) {
	if isAnagram("ggii", "eekk") {
		t.Log("Pass")
	} else {
		t.Fatalf("Falid")
	}

	if isAnagram("rat", "car") {
		t.Fatalf("Faild")
	} else {
		t.Log("Pass")
	}
}
