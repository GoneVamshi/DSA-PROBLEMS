class Solution {
    // Sorts an integer array with in-place Quick Sort.
    quickSort(arr) {
        let n = arr.length;
        this.#solve(arr, 0, n - 1);
        return arr;
    }

    // Sorts the current index range recursively.
    #solve(arr, low, high) {
        // Empty and single-value ranges are already sorted.
        if (low >= high) {
            return;
        }

   // Split the range into smaller and greater sides using the pivot.
        let pivotIndex = this.#partitionArray(arr, low, high);

        // Values before the pivot are sorted independently.
        this.#solve(arr, low, pivotIndex - 1);

        // Values after the pivot are sorted independently.
        this.#solve(arr, pivotIndex + 1, high);
    }

    // Places the pivot in the final sorted position.
    #partitionArray(arr, low, high) {
        let pivot = arr[high];
        let smallerIndex = low - 1;

        // Every scanned value is compared with the pivot once.
        for (let current = low; current < high; current++) {
            // Values no greater than the pivot belong in the left region.
            if (arr[current] <= pivot) {
                smallerIndex++;
                let temp = arr[smallerIndex];
                arr[smallerIndex] = arr[current];
                arr[current] = temp;
            }
        }

        // The pivot is placed directly after the left region.
        let temp = arr[smallerIndex + 1];
        arr[smallerIndex + 1] = arr[high];
        arr[high] = temp;

        return smallerIndex + 1;
    }
}

// Driver code
// Input array
let arr = [10, 7, 8, 9, 1, 5];

// Solution object creation
let obj = new Solution();

// Result printing
let answer = obj.quickSort(arr);
console.log(answer.join(" "));