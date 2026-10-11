class Solution {
    insertionSort(arr) {
        let n = arr.length;

        for (let index = 1; index < n; index++) {
            let key = arr[index];
            let position = index - 1;
            while (position >= 0 && arr[position] > key) {
                arr[position + 1] = arr[position];
                position--;
            }

           
            arr[position + 1] = key;
        }

        return arr;
    }
}

let arr = [12, 11, 13, 5, 6];

// Solution object creation
let obj = new Solution();

// Result printing
let answer = obj.insertionSort(arr);
console.log(answer);