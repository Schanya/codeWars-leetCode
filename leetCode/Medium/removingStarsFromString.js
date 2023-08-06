/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    var i;
    var str = "";
    let stars = 0;

    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] == '*') {
            stars++;
        } else if (stars == 0) {
            str = s[i] + str;
        } else {
            stars--;
        }
    }

    return str;
};

const s = "erase*****"
console.log(removeStars(s));