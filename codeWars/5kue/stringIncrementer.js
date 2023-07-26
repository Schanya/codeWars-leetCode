function incrementString(str) {
    let numIndex;
    let strArr = str.split('').reverse();

    if (!isNaN(Number(str))) {
        numIndex = str.length;
    }

    for (let i = 0; i < strArr.length; i++) {
        const el = strArr[i];

        if (isNaN(Number(el))) {
            numIndex = i;
            break;
        }

    }

    let number = strArr.splice(0, numIndex).reverse().join('');
    let numLength = number.length;
    str = strArr.reverse().join('')

    if (number.length) {
        increasedNum = (Number(number) + 1).toString();
        if (increasedNum.length < numLength) {
            let zeros = ''
            for (let i = 0; i < (numLength - increasedNum.length); i++) {
                zeros += '0';
            }
            increasedNum = zeros + increasedNum;
        }
        str += increasedNum;
    } else {
        str += 1;
    }

    return str;
}

console.log(incrementString("soghh929842ergnwrg0000938"))
