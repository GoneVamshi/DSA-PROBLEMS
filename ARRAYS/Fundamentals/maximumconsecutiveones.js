class Solution {
    findMaxConsecutiveOnes(nums) {
        let currentCount = 0;
        let maxCount = 0;

        for (const num of nums) {
            // A 1 extends the current streak.
            if (num === 1) {
                currentCount++;
                maxCount = Math.max(maxCount, currentCount);
            }
            // A zero breaks the current streak.
            else {
                currentCount = 0;
            }
        }

        return maxCount;
    }
}

const nums = [1, 1, 0, 1, 1, 1];

const solution = new Solution();
console.log(solution.findMaxConsecutiveOnes(nums));