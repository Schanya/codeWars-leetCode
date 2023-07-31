function scramble(str1, str2) {
    let objStr2 = str2.split('').reduce((sum, el) => (sum[el] == undefined ? sum[el] = 1 : ++sum[el], sum), {})
    let objStr1 = str1.split('').reduce((sum, el) => {
        if (objStr2[el]) sum[el] == undefined ? sum[el] = 1 : ++sum[el];

        return sum;
    }, {})

    let charNum2 = Object.values(objStr2);
    let charNum1 = Object.values(objStr1);


    if (charNum1.length != charNum2.length) return false;

    for (const key in objStr2) {
        if (Object.hasOwnProperty.call(objStr2, key)) {
            if (objStr2[key] > objStr1[key]) return false;
        }
    }

    return true;
}

console.log(scramble('scriptingjava', 'javascript'));