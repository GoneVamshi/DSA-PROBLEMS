class Solution {
    findUnion(nums1, nums2) {
        const n = nums1.length;
        const m = nums2.length;

        let i = 0;
        let j = 0;

        const unionResult = [];

        /*
         * Process the smaller current value first
         * because both arrays are already sorted.
         */
        while (i < n && j < m) {
            let currentValue;

            if (nums1[i] < nums2[j]) {
                currentValue = nums1[i];
                i++;
            } 
            else if (nums1[i] > nums2[j]) {
                currentValue = nums2[j];
                j++;
            } 
            else {
                currentValue = nums1[i];
                i++;
                j++;
            }

            /*
             * Add the value only when it differs
             * from the last value already stored.
             */
            if (
                unionResult.length === 0 ||
                unionResult[unionResult.length - 1] !== currentValue
            ) {
                unionResult.push(currentValue);
            }
        }

        // Process values left in the first array.
        while (i < n) {
            if (
                unionResult.length === 0 ||
                unionResult[unionResult.length - 1] !== nums1[i]
            ) {
                unionResult.push(nums1[i]);
            }

            i++;
        }

        // Process values left in the second array.
        while (j < m) {
            if (
                unionResult.length === 0 ||
                unionResult[unionResult.length - 1] !== nums2[j]
            ) {
                unionResult.push(nums2[j]);
            }

            j++;
        }

        return unionResult;
    }
}

const nums1 = [1, 1, 2, 3, 4];
const nums2 = [2, 3, 5, 6];

const solution = new Solution();
const answer = solution.findUnion(nums1, nums2);

console.log(answer.join(" "));