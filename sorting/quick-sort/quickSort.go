package main

import (
	"fmt"
)

func split(data []int, splitElement int) ([]int, []int) {
	dataLength := len(data)

	middlePoint := -1
	i := 0
	for ; i < len(data)-1; i++ {
		if data[i] <= splitElement {
			middlePoint++
			data[i], data[middlePoint] = data[middlePoint], data[i]
		}
	}

	data[middlePoint+1], data[dataLength-1] = data[dataLength-1], data[middlePoint+1]

	return data[:middlePoint+1], data[middlePoint+1:]
}

func quickSortAsc(data []int) []int {
	if len(data) <= 1 {
		return data
	}

	splitElement := data[len(data)-1]

	leftData, rightData := split(data, splitElement)

	quickSortAsc(leftData)
	quickSortAsc(rightData)

	return data
}

func main() {
	d := []int{50, 5, 7, 98, 4, 2, 5, 7, 9}
	resultAsc := quickSortAsc(d)
	fmt.Println(resultAsc)
}
