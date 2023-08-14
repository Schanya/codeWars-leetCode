function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}

function prime(max) {
    const result = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) result.push(i);
    }

    return result;
}
