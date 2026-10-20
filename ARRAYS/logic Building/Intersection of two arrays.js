class Solution {
    intersection(nums1, nums2) {
        const n = nums1.length;
        const m = nums2.length;

        let i = 0;
        let j = 0;

        const intersectionResult = [];

        while (i < n && j < m) {
            // The smaller value cannot match later values.
            if (nums1[i] < nums2[j]) {
                i++;
            }
            else if (nums1[i] > nums2[j]) {
                j++;
            }
            else {
                /*
                 * Add the common value only when
                 * it differs from the last result.
                 */
                if (
                    intersectionResult.length === 0 ||
                    intersectionResult[
                        intersectionResult.length - 1
                    ] !== nums1[i]
                ) {
                    intersectionResult.push(nums1[i]);
                }

                i++;
                j++;
            }
        }

        return intersectionResult;
    }
}

const nums1 = [1, 2, 2, 3, 4];
const nums2 = [2, 2, 4, 5];

const solution = new Solution();
const answer = solution.intersection(nums1, nums2);

console.log(answer.join(" "));