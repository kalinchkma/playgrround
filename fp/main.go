package main

import (
	"fmt"
	"slices"
)

func center_title(document string, width int) string {
	var mid = width / 2
	holder := ""
	tracker := 0
	for tracker <= width {
		if tracker == mid {
			holder += document
		} else {
			holder += " "
		}
		tracker++
	}
	return holder
}

func add_border(document string) string {
	border := ""
	for range document {
		border += "*"
	}
	return fmt.Sprintf("%v\n%v", document, border)
}

func stylize_title(document string) string {
	return add_border(center_title(document, 40))
}

func add_prefix(document string, documents []string) []string {
	prefix := fmt.Sprintf("%v. %v", len(documents), document)
	return append(documents, prefix)
}

func median(font_list []int) int {
	lst := font_list
	slices.Sort(lst)
	if len(lst)%2 != 0 {
		return lst[len(lst)/2]
	} else {
		mid := len(lst) / 2
		return (lst[mid] + lst[mid-1]) / 2
	}
}

func main() {
	title := "List of popular programming language"
	documents := []string{"go", "python", "rust", "javascript", "c", "c++"}

	doc := []string{}
	for _, v := range documents {
		doc = add_prefix(v, doc)
	}
	fmt.Println(stylize_title(title))
	fmt.Println(doc)
	fmt.Println(median([]int{10, 8, 7, 5}))
	fmt.Println(median([]int{1, 2, 3}))
}
