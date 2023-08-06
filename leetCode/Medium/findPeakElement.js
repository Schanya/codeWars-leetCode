/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    if (nums.length == 1) return 0;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        let isItPeak = nums[mid];
        let bigNeighbour = nums[mid + 1];
        let smalNeighbour = nums[mid - 1];

        if (mid == 0) {
            smalNeighbour = -Infinity;
        } else if (mid == nums.length - 1) {
            bigNeighbour = -Infinity;
        }

        if (isItPeak > bigNeighbour && isItPeak > smalNeighbour) {
            return mid
        } else if (smalNeighbour > isItPeak) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }

};

const nums = [3, 2, 1];
console.log(findPeakElement(nums));