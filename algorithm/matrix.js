const Matrix = [[1, 2, 3], [4, 5, 6], [0, 8, 9]]

const diagonalDifference = (matrix) => {
    let firstDiagonal = 0
    let secondDiagonal = 0
    for(let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i]
        secondDiagonal += matrix[i][matrix.length-i-1]
    }
    return Math.abs(firstDiagonal - secondDiagonal)
}
console.log(diagonalDifference(Matrix))