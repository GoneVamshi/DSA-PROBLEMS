/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    let n = matrix.length
    let m = matrix[0].length

    for(let i = 0;i<n;i++){
        for(let j = i+1;j<n;j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    for(let i = 0;i<m;i++){
        matrix[i].reverse()
    }
    // let n = matrix.length
    // let m = matrix[0].length

    // let matrix1 = Array.from({ length: n }, () => Array(m))

    // for(let i = 0;i<n;i++){
    //     for(let j = 0;j<m;j++){
    //         matrix1[j][n-1-i] = matrix[i][j]
    //     }
    // }

    // return matrix1
};