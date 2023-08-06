/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {

    if (dividend == -2147483648 && divisor == -1) return 2147483647

    let sign = 1;
    if (dividend * divisor < 0) {
        sign = -1;
    }

    dividend = Math.abs(dividend), divisor = Math.abs(divisor);

    let denominator = divisor;

    let quotient = 1;

    while (dividend > denominator) {
        denominator *= 2;
        quotient *= 2;
    }

    while (denominator > dividend) {
        denominator -= divisor;
        quotient -= 1;
    }
    return sign * quotient;
}

console.log(divide(10, 3));
