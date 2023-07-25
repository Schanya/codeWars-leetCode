function zeros(n) {
    let result = 0;
    let i = 1;

    while (Math.floor(n / 5 ** i) != 0) {
        result += Math.floor(n / 5 ** i);

        i++;
    }

    return result;
}

console.log(zeros(25))