class Solution {
    removeDuplicates(nums) {
        const n = nums.length;

        // An empty array has no unique values.
        if (n === 0) {
            return 0;
        }

        let uniquePosition = 1;

        for (let current = 1; current < n; current++) {
            /*
             * A different value means a new
             * unique element has been found.
             */
            if (nums[current] !== nums[uniquePosition - 1]) {
                nums[uniquePosition] = nums[current];
                uniquePosition++;
            }
        }

        return uniquePosition;
    }
}

const nums = [1, 1, 2, 2, 3];

const solution = new Solution();
const k = solution.removeDuplicates(nums);

console.log("k =", k);
console.log(nums.slice(0, k).join(" "));