function find(seq) {
    let low = seq[0];
    let high = low;
    for (let i of seq) {
        if (i < low) low = i;
        else if (i > high) high = i;
    }
    let step = (high - low) / seq.length;
    let mid = low + Math.floor((high - low) / 2);
    let expectedSum = (low - mid + high - mid) * (seq.length + 1) / 2;
    let sum = 0;
    for (let i of seq) {
        sum += i - mid;
    }
    return expectedSum - sum + mid;
}