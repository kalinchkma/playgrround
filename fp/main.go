package main

import (
	"fmt"
	"slices"
	"strings"
)

func CenterTitle(document string, width int) string {
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

func AddBorder(document string) string {
	border := ""
	for range document {
		border += "*"
	}
	return fmt.Sprintf("%v\n%v", document, border)
}

func StylizeTitle(document string) string {
	return AddBorder(CenterTitle(document, 40))
}

func AddPrefix(document string, documents []string) []string {
	prefix := fmt.Sprintf("%v. %v", len(documents), document)
	return append(documents, prefix)
}

func Median(font_list []int) int {
	lst := font_list
	slices.Sort(lst)
	if len(lst)%2 != 0 {
		return lst[len(lst)/2]
	} else {
		mid := len(lst) / 2
		return (lst[mid] + lst[mid-1]) / 2
	}
}

func FormatLine(line string) string {
	str := strings.Trim(line, " ")
	str = strings.ToUpper(str[:1]) + str[1:]

	return strings.Replace(str, ".", "", -1)
}

func ToTitle(line string) string {
	words := strings.Fields(line)
	for i, w := range words {
		if len(w) > 0 {
			words[i] = strings.ToUpper(string(w[0])) + strings.ToLower(w[1:])
		}
	}
	return strings.Join(words, " ")
}

func TogggleClass(line string) string {
	str := strings.Replace(line, ".", "", -1)
	if str == ToTitle(str) {
		return strings.ToUpper(line) + "!"
	} else if str == strings.ToUpper(str) {
		return strings.Replace(fmt.Sprintf("%v%v", strings.ToUpper(line[:1]), strings.ToLower(line[1:])), "!", "", -1)
	} else if str == strings.ToLower(str) || str[:1] == strings.ToLower(str[:1]) {
		words := strings.Fields(line)
		for i, w := range words {
			if len(w) > 0 {
				words[i] = strings.ToUpper(string(w[0])) + strings.ToLower(w[1:])
			}
		}
		return strings.Join(words, " ")
	} else {
		return line
	}

}

func main() {
	title := "List of popular programming language"
	documents := []string{"go", "python", "rust", "javascript", "c", "c++"}

	doc := []string{}
	for _, v := range documents {
		doc = AddPrefix(v, doc)
	}
	fmt.Println(StylizeTitle(title))
	fmt.Println(doc)
	fmt.Println(Median([]int{10, 8, 7, 5}))
	fmt.Println(Median([]int{1, 2, 3}))
	fmt.Println(FormatLine("  ajksd kjahsd asjkd. qweqwe. qweqw. qweqwe. sadqwae2wqe. qweq. wqe    "))

	fmt.Println(TogggleClass("live long and prosper"))

	fmt.Println(TogggleClass("...Khan"))

	fmt.Println(TogggleClass("BEAM ME UP, BOOTS!"))

}
