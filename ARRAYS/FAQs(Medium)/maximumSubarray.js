/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
     let maxi = -Infinity
     let sum = 0

     for(let i = 0;i<nums.length;i++){
        sum+=nums[i]

        maxi = Math.max(maxi,sum)

        if(sum<0){
            sum = 0
        }
     }

    // for(let i = 0;i<nums.length;i++){
    //     let sum = 0
    //     for(let j = i;j<nums.length;j++){
    //         sum+=nums[j]

    //         maxi = Math.max(maxi,sum)
    //     }
    // }

    return maxi
};