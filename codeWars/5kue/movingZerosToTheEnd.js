function moveZeros(arr) {
    let arrr = [];
    zeros = 0;
    let temp = arr.map(el => {
        if (Array.isArray(el) || el !== 0) {
            arrr.push(el);
        } else {
            zeros++;
            return el
        }
    });

    return arrr.concat(...temp.filter(el => el !== undefined));
}

console.log(moveZeros([
    'a', 0, 0, 'b', null,
    'c', 'd', 0, 1, false,
    0, 1, 0, 3, [],
    0, 1, 9, 0, 0,
    {}, 0, 0, 9
]))