/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const complement = new Map();

    for (let i = 0; i < nums.length; i++) {
        const additionToCurrentNumber = target - nums[i];

        if (complement.has(additionToCurrentNumber)) {
            return [i, complement.get(additionToCurrentNumber)];
        }

        complement.set(nums[i], i);
    }

    return [-1, -1];
};
