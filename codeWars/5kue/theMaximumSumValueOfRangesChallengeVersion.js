function maxSum(arr, ranges) {
    const prefixSum = [0];
    let sum = 0;

    for (const num of arr) {
        sum += num;
        prefixSum.push(sum);
    }

    let maxSum = -Infinity;
    for (const range of ranges) {
        const rangeSum = prefixSum[range[1] + 1] - prefixSum[range[0]];
        maxSum = Math.max(maxSum, rangeSum);
    }

    return maxSum;
}