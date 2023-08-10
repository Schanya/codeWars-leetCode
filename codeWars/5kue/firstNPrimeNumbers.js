function Primes() {

}

Primes.isPrime = function (num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

Primes.first = function (max) {
    const result = [];
    let i = 2;

    while (result.length < max) {
        if (this.isPrime(i)) result.push(i);

        i++
    }

    return result;
}

console.log(Primes.first(5));