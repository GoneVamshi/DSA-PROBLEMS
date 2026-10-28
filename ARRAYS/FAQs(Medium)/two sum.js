/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    // let arr = nums.map((value, index) => [value, index])

    // arr.sort((a,b)=>a[0]-b[0])

    // let left = 0
    // let right = arr.length-1

    // while(left<right){
    //     let sum =arr[left][0]+arr[right][0]
    //     if(sum === target){
    //         return [arr[left][1],arr[right][1]]
    //     }else if(sum<target){
    //         left++
    //     }else{
    //         right--
    //     }
    // }
    const hashMap = new Map()

    for(let i=0;i<nums.length;i++){
        const num = nums[i]

        let rem = target-num

        if(hashMap.has(rem)){
            return [i,hashMap.get(rem)]
        }

        hashMap.set(num,i)
    }
};