var rearrangeArray = function(nums) {
    const ans = []
    let posi = 0
    let negi = 1

    for(let i = 0;i<nums.length;i++){
        if(nums[i]>0){
            ans[posi] = nums[i]
            posi+=2
        }else{
            ans[negi] = nums[i]
            negi+=2
        }
    }

    return ans
}