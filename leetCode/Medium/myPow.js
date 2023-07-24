/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    return n > 0 ? x ** n : 1 / (x ** Math.abs(n))
};

console.log(myPow(2, -2))