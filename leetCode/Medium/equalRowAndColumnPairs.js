/**
 * @param {number[][]} grid
 * @return {number}
 */
const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));
var equalPairs = function (grid) {
    const gridTranspose = transpose(grid);
    const result = grid.reduce((res, gridEl) => {
        gridTranspose.forEach(el => {
            if (el.join(',') == gridEl.join(',')) {
                res++;
            }
        })

        return res
    }, 0)

    return result;
};

let grid = [[11, 1], [1, 11]];

console.log(equalPairs(grid));
