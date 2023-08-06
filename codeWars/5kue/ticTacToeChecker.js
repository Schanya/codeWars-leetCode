const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));
const checkRow = board => {
    let mainDiagonal = [];
    let zeros = [];
    for (let i = 0; i < board.length; i++) {
        let el = board[i];

        if (el.some(el => el == 0)) zeros.push(1);

        mainDiagonal.push(board[i][i]);

        let isCrossWin = el.filter(el => el == 1);
        let isNolikWin = el.filter(el => el == 2);

        if (isCrossWin.length == 3) return 1;
        if (isNolikWin.length == 3) return 2;

    }

    if (mainDiagonal.filter(el => el == 1).length == 3) return 1;
    if (mainDiagonal.filter(el => el == 2).length == 3) return 2;

    return zeros.length == 0 ? 0 : -1;
}
const getSquareMatrixDiagData = arr => {
    let n = arr.length;
    let step = Math.sqrt(arr.length) - 1;
    let result = [];

    for (let i = step; i < n - step; i += step) {
        result.push(arr[i])
    }

    if (result.filter(el => el == 1).length == 3) return 1;
    if (result.filter(el => el == 2).length == 3) return 2;

    return -1;

}

function isSolved(board) {
    let isWinnerInSideDiagonal = getSquareMatrixDiagData(board);
    if (isWinnerInSideDiagonal != -1) return isWinnerInSideDiagonal;

    let isWinnerInRow = checkRow(board);
    if (isWinnerInRow != -1 && isWinnerInRow != 0) return isWinnerInRow;

    let transposeBoard = transpose(board);

    isWinnerInRow = checkRow(transposeBoard);
    if (isWinnerInRow != -1 && isWinnerInRow != 0) return isWinnerInRow;

    return isWinnerInRow;
}

console.log(isSolved([[2, 2, 1],
[2, 1, 2],
[2, 1, 2]]))