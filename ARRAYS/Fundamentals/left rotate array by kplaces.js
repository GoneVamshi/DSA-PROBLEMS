class Solution {
    // Reverses the elements inside the inclusive index range.
    reverseRange(nums, left, right) {
        while (left < right) {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            left++;
            right--;
        }
    }

    leftRotate(nums, k) {
        // Rotation does not change an array with at most one element.
        if (nums.length <= 1) {
            return;
        }

        const n = nums.length;

        // Remove complete rotation cycles.
        k %= n;

        if (k === 0) {
            return;
        }

        // Prepare both blocks before exchanging their positions.
        this.reverseRange(nums, 0, k - 1);
        this.reverseRange(nums, k, n - 1);

        // Restore internal order after the block positions are exchanged.
        this.reverseRange(nums, 0, n - 1);
    }
}

const nums = [1, 2, 3, 4, 5];
const k = 2;

const solution = new Solution();
solution.leftRotate(nums, k);

console.log("Rotated array:", nums);