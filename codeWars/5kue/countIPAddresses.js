function ipsBetween(start, end) {
    start = start.split('.');
    end = end.split('.').map((el, i) => el - start[i]);

    const endBit = (end[0] * (256 ** 3)) + (end[1] * (256 ** 2)) + (end[2] * 256) + end[3]

    return endBit;
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"));