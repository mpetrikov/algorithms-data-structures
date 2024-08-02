package main

import "fmt"

func insertionSoftAsc(data []int) []int {
	sortedData := make([]int, len(data))
	copy(sortedData, data)

	for i := range sortedData {
		currentPosition := i

		for currentPosition > 0 && sortedData[currentPosition-1] > sortedData[currentPosition] {
			sortedData[currentPosition-1], sortedData[currentPosition] = sortedData[currentPosition], sortedData[currentPosition-1]
			currentPosition--
		}
	}

	return sortedData
}

func main() {
	d := []int{50, 5, 7, 98, 4, 2, 5, 7, 9}
	resultAsc := insertionSoftAsc(d)
	fmt.Println(resultAsc)
}
