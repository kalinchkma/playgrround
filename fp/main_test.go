package main

import "testing"

func TestCenterTitle(t *testing.T) {
	result := CenterTitle("I am the hunter", 10)
	expected := "     I am the hunter     "
	if result != expected {
		t.Fatalf("Expected: \n%v", expected)
		t.Fatalf("Found:\n%v", result)
	}
}

func TestAddBorder(t *testing.T) {
	result := AddBorder("I am the hunter")
	expected := "I am the hunter\n***************"
	if result != expected {
		t.Fatalf("Expected:\n%v", expected)
		t.Fatalf("Found:\n%v", result)
	}
}
