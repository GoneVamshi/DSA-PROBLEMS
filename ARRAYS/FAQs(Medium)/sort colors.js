/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0
    let mid = 0
    let high = nums.length-1

    while(mid<=high){
        if(nums[mid]===0){
            [nums[low],nums[mid]] = [nums[mid],nums[low]]
            low++
            mid++
            
        }else if(nums[mid]===1){
            mid++
        }else{
            [nums[mid],nums[high]] = [nums[high],nums[mid]]
            high--
        }
    }
    return nums
    // let count0 = 0
    // let count1 = 0
    // let count2 = 0

    // for(let i = 0;i<nums.length;i++){
    //     if(nums[i]===0){
    //         count0+=1
    //     }else if(nums[i]===1){
    //         count1+=1
    //     }else{
    //         count2+=1
    //     }
    // }

    // for(let i = 0;i<count0;i++){
    //     nums[i] = 0
    // }

    // for(let i = count0;i<count0+count1;i++){
    //     nums[i] = 1
    // }
    // for(let i = count0+count1;i<count0+count1+count2;i++){
    //     nums[i] = 2
    // }

    // return nums
};