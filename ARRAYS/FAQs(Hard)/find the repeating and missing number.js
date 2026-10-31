class Solution {
    findMissingRepeatingNumbers(nums) {
        
        let sum1 = 0
        let n = nums.length
        let sum= (n*(n+1))/2
        let repeating;
        for(let i = 0;i<nums.length;i++){
            let count = 0
            for(let j = 0;j<nums.length;j++){
                if(nums[i]===nums[j]){
                    count++
                }

            }

            sum1+=nums[i]

            if(count ===2){
                repeating = nums[i]
                
            }
        }

        let missing = sum - (sum1-repeating)

        return [repeating,missing]


        

        
    }
}