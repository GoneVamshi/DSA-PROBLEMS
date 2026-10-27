/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let n = matrix.length
    let m = matrix[0].length;

    let row= new Array(n).fill(0)
    let col = new Array(m).fill(0)

    for(let i = 0;i<n;i++){
        for(let j = 0;j<m;j++){
            if(matrix[i][j]===0){
                row[i] = 1
                col[j] = 1
            }
        }
    }

    for(let i = 0;i<n;i++){
        for(let j = 0;j<m;j++){
            if(row[i] || col[j] === 1){
                matrix[i][j] = 0
            }
        }
    }

    return matrix

    // for(let i = 0;i<n;i++){
    //     for(let j = 0;j<m;j++){
    //         if(matrix[i][j]===0){
    //             markRow(i,m,matrix)
    //             markCol(j,n,matrix)
    //         }
    //     }
    // }

    // for(let k = 0;k<n;k++){
    //     for(let z = 0;z<m;z++){
    //         if(matrix[k][z]===-1){
    //             matrix[k][z] =0
    //         }
    //     }
    // }

    // return matrix
};

// function markRow(i,m,matrix){
//     for(let j = 0;j<m;j++){
//         if(matrix[i][j]!==0){
//             matrix[i][j] = -1
//         }
//     }

// }

// function markCol(j,n,matrix){
//     for(let i = 0;i<n;i++){
//         if(matrix[i][j]!==0){
//             matrix[i][j] = -1
//         }
//     }
// }