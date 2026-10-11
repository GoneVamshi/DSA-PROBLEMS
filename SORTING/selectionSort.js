class Solution {
    selectionSort(arr) {
        const n = arr.length;
        for (let boundary = 0; boundary < n - 1; boundary++) {
            let minIndex = boundary;
            for (let current = boundary + 1; current < n; current++) {
                if (arr[current] < arr[minIndex]) {
                    minIndex = current;
                }
            }

            // A different minimum position makes a swap necessary.
            if (minIndex !== boundary) {
                const temporary = arr[boundary];
                arr[boundary] = arr[minIndex];
                arr[minIndex] = temporary;
            }
        }

        return arr;
    }
}


const arr = [29, 10, 14, 37, 13];

const obj = new Solution();

const answer = obj.selectionSort(arr);
console.log(answer);