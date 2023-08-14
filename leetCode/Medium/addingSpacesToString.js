/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let result = '';

    for (let i = 0; i < spaces.length; i++) {
        result += s.slice(result.length ? result.length - i : 0, spaces[i]) + ' '

    }

    return result + s.slice(result.length - spaces.length, undefined);

};
const s = "LeetcodeHelpsMeLearn", spaces = [8, 13, 15]

console.log(addSpaces(s, spaces));