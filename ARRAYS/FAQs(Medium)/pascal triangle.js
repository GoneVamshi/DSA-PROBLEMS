/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let r = nuRows-1
    let c = 0

    let ans = []

    for(let row = 1;row<=r;row++){
        let temp = []
        for(let col=1;col<=row;col++){
            temp.push(NcR(r,c))
        }
        ans.push(temp)
    }

    return ans
};

function NcR(r,c){
    let res = 1

    for(let i = 0;i<c;i++){
        res = res*r-i
        res = res/i+1
    }

    return res
}