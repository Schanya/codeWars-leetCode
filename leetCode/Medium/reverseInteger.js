/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x < -(2 ** 31) || x > (2 ** 31) - 1) return 0;

    if (x < 0) {
        let arrNum = x.toString().split('');
        arrNum.shift();
        x = +('-' + arrNum.reverse().join(''));
    } else {
        let arrNum = x.toString().split('');
        x = +arrNum.reverse().join('');
    }

    if (x < -(2 ** 31) || x > (2 ** 31) - 1) return 0;

    return x;
};

console.log(reverse(1534236469));

// console.log(9646324351 > (2 ** 31) - 1)