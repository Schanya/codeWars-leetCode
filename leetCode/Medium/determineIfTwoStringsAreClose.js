/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {

    let objWord2 = word2.split('').reduce((obj, char) => (obj[char] == undefined ? obj[char] = 1 : ++obj[char], obj), {});

    let objWord1 = word1.split('').reduce((obj, char) => {
        if (objWord2[char] !== undefined) {
            obj[char] == undefined ? obj[char] = 1 : ++obj[char]
        }
        return obj;
    }, {});

    return Object.values(objWord1).sort().join('') == Object.values(objWord2).sort().join('');
};
word1 = "abbzccca", word2 = "babzzczc"

console.log(closeStrings(word1, word2));