/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let sortArr = nums1.concat(nums2).sort((a, b) => a - b);

    let length = sortArr.length;

    if (length <= 1) {
        return sortArr[0] ?? 0;
    }

    let index = length / 2;


    return length % 2 != 0 ? sortArr[Math.floor(index)] : (sortArr[index - 1] + sortArr[index]) / 2;
};

console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5]))