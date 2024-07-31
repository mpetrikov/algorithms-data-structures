package twosum

func twoSum(nums []int, target int) []int {
	deductedAddition := map[int]int{}

	for i, num := range nums {
		additionalToCurrentNumber := target - num

		j, ok := deductedAddition[additionalToCurrentNumber]
		if ok {
			return []int{j, i}
		}

		deductedAddition[num] = i
	}

	return nil
}
