function makeLooper(str) {
    let index = 0;

    return function () {
        if (index >= str.length) {
            index = 1;
            return str[0];
        } else {
            const letter = str[index];
            index++;

            return letter;
        }
    }
}

let abs = makeLooper('abc');
console.log(abs())
console.log(abs())
console.log(abs())
console.log(abs())
console.log(abs())
console.log(abs())
console.log(abs())
console.log(abs())