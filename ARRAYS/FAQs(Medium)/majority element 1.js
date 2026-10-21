var majorityElement = function(nums) {

    let count = 0
    let candidate;

    for(let i= 0;i<nums.length;i++){
        if(count === 0){
            candidate = nums[i]
            count++
        }else if(candidate === nums[i]){
            count++
        }else{
            count--
        }
    }

    count = 0

    for(let i = 0;i<nums.length;i++){
        if(candidate === nums[i]){
            count++
        }
    }

    if(count> Math.floor((nums.length)/2)){
        return candidate
    }
}