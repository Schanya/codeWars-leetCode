/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

var successfulPairs = function (spells, potions, success) {
    const result = [];
    const sortedPotions = potions.sort((a, b) => a - b);

    for (const spell of spells) {
        let left = 0;
        let right = sortedPotions.length - 1;
        let count = 0;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (spell * sortedPotions[mid] >= success) {
                count = sortedPotions.length - mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        result.push(count);
    }

    return result;
};

const spells = [5, 1, 3], potions = [1, 2, 3, 4, 5], success = 7;

console.log(successfulPairs(spells, potions, success)); //[4,0,3]
// console.log(Math.floor(1.5));