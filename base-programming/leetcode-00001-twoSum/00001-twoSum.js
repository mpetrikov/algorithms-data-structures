/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const deductedAddition = new Map();

    for (let i = 0; i < nums.length; i++) {
        const additionToCurrentNumber = target - nums[i];

        if (deductedAddition.has(additionToCurrentNumber)) {
            return [i, deductedAddition.get(deducted)];
        }

        deductedAddition.set(nums[i], i);
    }

    return [-1, -1];
};
