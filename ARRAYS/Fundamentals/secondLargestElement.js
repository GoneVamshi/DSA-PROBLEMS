class Solution {
    secondLargest(nums) {
        const n = nums.length;

        /*
         * At least two values are needed
         * to have a distinct second largest.
         */
        if (n < 2) {
            return -1;
        }

        let largest = nums[0];
        let secondLargest = 0;
        let hasSecond = false;

        for (let index = 1; index < n; index++) {
            const current = nums[index];

            /*
             * A new maximum moves the previous
             * maximum into second place.
             */
            if (current > largest) {
                secondLargest = largest;
                largest = current;
                hasSecond = true;
            }

            /*
             * Values equal to largest are ignored
             * because the answer must be distinct.
             */
            else if (current < largest) {

                /*
                 * Keep the greatest valid value
                 * found below the current maximum.
                 */
                if (!hasSecond || current > secondLargest) {
                    secondLargest = current;
                    hasSecond = true;
                }
            }
        }

        // No valid candidate was found.
        if (!hasSecond) {
            return -1;
        }

        return secondLargest;
    }
}

const nums = [8, 8, 5, 3, 5];

const solution = new Solution();
console.log(solution.secondLargest(nums));