/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n= nums.length;

    let index=-1;

    for(let i = n-2;i>=0;i--){
        if(nums[i]<nums[i+1]){
            index = i
            break
        }
    }

    if(index===-1){
        nums.reverse()
        return
    }

    let element;

    for(let i = n-1;i>index;i--){
        if(nums[i]>nums[index]){
            let element = nums[index]
            nums[index] = nums[i]
            nums[i] = element
            break
        }
    }

    

    let start = index+1

    nums.splice(start,nums.length-start,...nums.slice(start).sort((a,b)=>a-b))

    return nums
};