class Solution {
    largestElement(nums) {
        // The first element provides the initial valid candidate.
        let maxElement = nums[0];

        // Compare every remaining value with the largest found so far.
        for (let index = 1; index < nums.length; index++) {
            if (nums[index] > maxElement) {
                maxElement = nums[index];
            }
        }

        return maxElement;
    }
}

const nums = [5, 2, 9, 1];

const solution = new Solution();

console.log("Largest element:", solution.largestElement(nums));