/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    const result = [];
    const product = eval(nums.join('*'))

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            const partOne = nums.slice(0, i).join('*');
            const partSecond = nums.slice(i + 1, nums.length).join('*');

            if (!partOne.length) {
                result.push(eval(partSecond))
                continue;
            }

            if (!partSecond.length) {
                result.push(eval(partOne))
                continue;
            }

            const prod = eval(`${partOne}*${partSecond}`);

            result.push(prod)
        } else {
            result.push(product / nums[i])
        }

    }

    return result;
};

const nums = [5, 1, 3, 4, 0]

console.log(productExceptSelf(nums));

