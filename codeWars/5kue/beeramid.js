const beeramid = function (bonus, price) {
    let numberOfBeer = bonus / price;
    let i = 1;

    while (numberOfBeer >= i ** 2) {
        numberOfBeer -= i ** 2;

        i++;
    }

    return i - 1;
}

console.log(beeramid(10, 2));