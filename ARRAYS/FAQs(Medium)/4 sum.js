/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    const n = nums.length;
    const temp = []
    nums.sort((a,b)=>a-b)
    for(let i = 0;i<n;i++){
        if(i>0 && nums[i]===nums[i-1]){
            continue
        }
        for(let j = i+1;j<n;j++){
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let k = j + 1;
            let z = n - 1

            while(k<z){
                let sum = nums[i]+nums[j]+nums[k]+nums[z]

                if(sum<target){
                    k++
                }else if(sum>target){
                    z--
                }else{
                    temp.push([nums[i],nums[j],nums[k],nums[z]])
                    k++
                    z--

                    while(k<z && nums[k]===nums[k-1]){
                        k++
                    }
                    while(k<z && nums[z]===nums[z+1]){
                        z++
                    }
                }
            }
        }
    }

    return temp
    // const unique = new Set()
    // const temp = []
    // const n = nums.length

    // for(let i = 0;i<n;i++){
    //     for(let j = i+1;j<n;j++){
    //         for(let k = j+1;k<n;k++){
    //             for(let z = k+1;z<n;z++){
    //                 if(nums[i]+nums[j]+nums[k]+nums[z] === target){
    //                     let triplet = [nums[i],nums[j],nums[k],nums[z]]
    //                     triplet.sort((a,b)=>a-b)
    //                     let key = triplet.join(",")

    //                     if(!unique.has(key)){
    //                         temp.push(triplet)
    //                         unique.add(key)
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    // return temp
};