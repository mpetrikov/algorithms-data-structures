package twosum

func twoSum(nums []int, target int) []int {
	complement := map[int]int{}

	for i, num := range nums {
		additionalToCurrentNumber := target - num

		j, ok := complement[additionalToCurrentNumber]
		if ok {
			return []int{j, i}
		}

		complement[num] = i
	}

	return nil
}
