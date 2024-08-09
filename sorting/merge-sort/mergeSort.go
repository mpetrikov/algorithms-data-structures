package main

import "fmt"

func merge(a []int, b []int) []int {
	result := make([]int, len(a)+len(b))

	i := 0
	j := 0

	for i < len(a) || j < len(b) {
		if j == len(b) || (i < len(a) && a[i] < b[j]) {
			result[i+j] = a[i]
			i++
		} else {
			result[i+j] = b[j]
			j++
		}
	}

	return result

}

func mergeSoftAsc(data []int) []int {
	if len(data) <= 1 {
		return data
	}

	halfOfData := len(data) / 2

	leftData := mergeSoftAsc(data[0:halfOfData])
	rightData := mergeSoftAsc(data[halfOfData:])

	result := merge(leftData, rightData)

	return result
}

func main() {
	d := []int{50, 5, 7, 98, 4, 2, 5, 7, 9}
	resultAsc := mergeSoftAsc(d)
	fmt.Println(resultAsc)
}
