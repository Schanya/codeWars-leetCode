const getCalomnNumbering = (secretWord) => {
    const sortedSecretWord = secretWord.split('').sort();
    for (let i = 0; i < sortedSecretWord.length; i++) {
        secretWord = secretWord.replace(sortedSecretWord[i], `${i} `);
    }
    secretWord = secretWord.split(' ');
    secretWord.pop();
    return secretWord.map((c) => +c);
};

function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map((row) => row[i]));
}

const nico = (secretWord, text) => {
    const numbering = getCalomnNumbering(secretWord);

    const matrix = [];
    text = text.split('');
    while (text.length !== 0) {
        matrix.push(text.splice(0, secretWord.length));
    }

    const t = transpose(matrix);
    const temp = [];
    for (let i = 0; i < numbering.length; i++) {
        temp.push(t[numbering.indexOf(i)]);
    }
    const transposeResult = transpose(temp);
    const result = [];

    for (let i = 0; i < transposeResult.length; i++) {
        const element = transposeResult[i];
        result.push(...element)
    }

    return result.map(el => el == undefined ? ' ' : el).join('');
};

console.log(nico('secretinformation', 'crazy'));