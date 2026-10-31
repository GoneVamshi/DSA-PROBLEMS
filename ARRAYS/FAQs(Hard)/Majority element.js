/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

    const n = nums.length
    let candidate1;
    let candidate2;

    let count1 = 0
    let count2 = 0

    for(let i = 0;i<nums.length;i++){
        if(count1 === 0 && candidate2!==nums[i]){
            count1++
            candidate1 = nums[i]
        }else if(count2 === 0 && candidate1!== nums[i]){
            count2++
            candidate2 = nums[i]
        }else if(candidate1 === nums[i]){
            count1++
        }else if(candidate2 === nums[i]){
            count2++
        }else{
            count1--
            count2--
        } 
    }

    count1 = 0
    count2 = 0

    for(let i = 0;i<n;i++){
        if(candidate1 === nums[i]){
            count1++
        }

        if(candidate2 === nums[i]){
            count2++
        }
    }

    let result = []

    if(count1 > Math.floor(n/3)){
        result.push(candidate1)
    }

    if(count2>Math.floor(n/3) && candidate2!==candidate1){
        result.push(candidate2)
    }

    return result

    // let n = nums.length
    // let result = []

    // const hash = {}

    // for(let i = 0;i<nums.length;i++){
    //     const num = nums[i]

    //     if(num in hash){
    //         hash[num] +=1
    //     }else{
    //         hash[num] = 1
    //     }
    // }

    // for(const key in hash){
    //     if(hash[key]>Math.floor(n/3)){
    //         result.push(Number(key))
    //     }
    // }

    // return result

};