class Solution {

    // Merges two sorted ranges into the original array.
    merge(arr, left, mid, right) {
        const leftPart = [];
        const rightPart = [];

        // Copy left range to preserve values during merging.
        for (let index = left; index <= mid; index++) {
            leftPart.push(arr[index]);
        }

        // Copy right range for safe comparison during merging.
        for (let index = mid + 1; index <= right; index++) {
            rightPart.push(arr[index]);
        }

        let leftIndex = 0;
        let rightIndex = 0;
        let writeIndex = left;

        // Compare both ranges until one becomes empty.
        while (
            leftIndex < leftPart.length &&
            rightIndex < rightPart.length
        ) {
            // Take from left on equality to keep sorting stable.
            if (leftPart[leftIndex] <= rightPart[rightIndex]) {
                arr[writeIndex] = leftPart[leftIndex];
                leftIndex++;
            } else {
                arr[writeIndex] = rightPart[rightIndex];
                rightIndex++;
            }

            writeIndex++;
        }

        // Copy remaining left values as they are already sorted.
        while (leftIndex < leftPart.length) {
            arr[writeIndex] = leftPart[leftIndex];
            leftIndex++;
            writeIndex++;
        }

        // Copy remaining right values as they are already sorted.
        while (rightIndex < rightPart.length) {
            arr[writeIndex] = rightPart[rightIndex];
            rightIndex++;
            writeIndex++;
        }
    }

    // Divides the range and merges both sorted halves.
    mergeSortHelper(arr, left, right) {
        // A range of zero or one value is already sorted.
        if (left >= right) {
            return;
        }

        const mid = left + Math.floor((right - left) / 2);

        // Sort left half before merging.
        this.mergeSortHelper(arr, left, mid);

        // Sort right half before merging.
        this.mergeSortHelper(arr, mid + 1, right);

        // Merge both sorted halves.
        this.merge(arr, left, mid, right);
    }

    // Sorts the array using merge sort.
    mergeSort(arr) {
        const n = arr.length;

        // Arrays with fewer than two values are already sorted.
        if (n < 2) {
            return arr;
        }

        this.mergeSortHelper(arr, 0, n - 1);
        return arr;
    }
}

// Input array
const arr = [38, 27, 43, 10];

// Create solution object
const obj = new Solution();

// Sort and print the result
const answer = obj.mergeSort(arr);
console.log(answer.join(" "));