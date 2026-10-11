class Solution {
    // Sorts an integer array by repeated adjacent swaps.
    bubbleSort(arr) {
        const n = arr.length;

        // Each pass fixes one large value at the right boundary.
        for (let pass = 0; pass < n - 1; pass++) {
            // The fixed suffix is skipped during the adjacent scan.
            for (let current = 0; current < n - pass - 1; current++) {
                // A larger left value must move right to repair local order.
                if (arr[current] > arr[current + 1]) {
                    const temporary = arr[current];
                    arr[current] = arr[current + 1];
                    arr[current + 1] = temporary;
                }
            }
        }

        return arr;
    }
}

// Driver code
// Input array
const arr = [5, 1, 4, 2, 8];

// Solution object creation
const obj = new Solution();

// Result printing
const answer = obj.bubbleSort(arr);
console.log(answer);