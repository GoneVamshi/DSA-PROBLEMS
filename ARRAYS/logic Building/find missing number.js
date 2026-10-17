class Solution {
    // Returns the missing element.
    missingNumber(nums) {
        const n = nums.length;

        // LeetCode 268 constraints stay within JavaScript's safe integer range.
        const expectedSum = (n * (n + 1)) / 2;
        let actualSum = 0;

        // Combine all present values so their contribution can be removed.
        for (const value of nums) {
            actualSum += value;
        }

        return expectedSum - actualSum;
    }
}

// Driver code
function main() {
    const nums = [3, 0, 1];

    // instance for class Solution
    const sol = new Solution();

    console.log(sol.missingNumber(nums));
}

main();