/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let result = s.trim().split(' ')
    result.reverse();

    return result.filter(el => el != '').join(' ');
};

console.log(reverseWords('a good   example'))