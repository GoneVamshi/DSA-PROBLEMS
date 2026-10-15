class Solution {
    leftRotateByOne(nums) {
        const n = nums.length;

        // Arrays with at most one element remain unchanged.
        if (n <= 1) {
            return;
        }

        // Save the first value before shifting overwrites it.
        const first = nums[0];

        // Move every remaining element one position to the left.
        for (let index = 1; index < n; index++) {
            nums[index - 1] = nums[index];
        }

        // Place the saved first value at the end.
        nums[n - 1] = first;
    }
}

const nums = [1, 2, 3, 4, 5];

const solution = new Solution();
solution.leftRotateByOne(nums);

console.log(nums.join(" "));