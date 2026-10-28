/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n = nums.length;

    let temp = []

    nums.sort((a,b)=>a-b)

    
  

    for(let i = 0;i<n;i++){
        if(i>0 && nums[i] === nums[i-1]){
            continue
        }

        let j = i+1
        let k = nums.length-1

        while(j<k){
            
            if(nums[i]+nums[j]+nums[k]<0){
                j++
            }else if(nums[i]+nums[j]+nums[k]>0){
                k--
            }
            else if(nums[i]+nums[j]+nums[k]===0){
                temp.push([nums[i],nums[j],nums[k]])

                j++
                k--
                while(j<k && nums[j]===nums[j-1]){
                    j++
                }
                while( j<k && nums[k] === nums[k+1]){
                    k--
                }

            }
        }
    }

    return temp

    

    // let temp = []

    // let unique = new Set()

    // for(let i = 0;i<n;i++){
    //     const hash = new Map()
    //     for(let j =i+1;j<n;j++){
    //         let k = -(nums[i]+nums[j])

    //         if(hash.has(k)){
    //             let triplet = [nums[i],nums[j],k]
    //             triplet.sort((a,b)=>a-b)


    //             let key = triplet.join(",")

    //             if(!unique.has(key)){
    //                 unique.add(key)
    //                 temp.push(triplet)
    //             }

    //         }else{
    //             hash.set(nums[j],j)
    //         }
    //     }
    // }

    return temp

    // let temp = []
    // let unique = new Set()



    // for(let i = 0;i<nums.length;i++){
    //     for(let j = i+1;j<nums.length;j++){
    //         for(let k = j+1;k<nums.length;k++){
    //             if(nums[i]+nums[j]+nums[k] === 0){
    //                 let triplet = [nums[i],nums[j],nums[k]]

    //                 triplet.sort((a,b)=>a-b)

    //                 let key  = triplet.join(",")

    //                 if(!unique.has(key)){
    //                     unique.add(key)
    //                     temp.push(triplet)
    //                 }
    //             }
    //         }
    //     }
    // }

    // return temp
    


    // return temp
};