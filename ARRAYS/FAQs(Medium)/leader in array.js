class Solution {
    leadersInArray(nums) {
        const n = nums.length;

        // No leaders exist in an empty array.
        if (n === 0) {
            return [];
        }

        const leaders = [];
        let maxRight = nums[n - 1];

        // The rightmost element is always a leader.
        leaders.push(nums[n - 1]);

        for (let index = n - 2; index >= 0; index--) {
            /*
             * Equality is valid because only a
             * strictly greater right value disqualifies it.
             */
            if (nums[index] >= maxRight) {
                leaders.push(nums[index]);
            }

            // Keep the greatest value seen on the right.
            maxRight = Math.max(maxRight, nums[index]);
        }

        /*
         * Leaders were collected from right to left,
         * so reverse them to restore original order.
         */
        leaders.reverse();

        return leaders;
    }
}

const nums = [10, 22, 12, 3, 0, 6];

const solution = new Solution();
const leaders = solution.leadersInArray(nums);

console.log(leaders.join(" "));