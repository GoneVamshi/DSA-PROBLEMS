class Solution {
    linearSearch(nums, target) {
        // Check elements from left to right to find the first match.
        for (let index = 0; index < nums.length; index++) {
            // Return as soon as the target is found.
            if (nums[index] === target) {
                return index;
            }
        }

        // Reaching here means the target is not present.
        return -1;
    }
}

const nums = [4, 2, 7, 2];
const target = 2;

const solution = new Solution();
const answer = solution.linearSearch(nums, target);

console.log("Index:", answer);