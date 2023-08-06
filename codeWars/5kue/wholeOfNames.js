function hallOfFame(players) {
    const object = {};
    let countPalce = 0;

    for (const element of players) {
        // console.log(element)
        if (object[element[1]] !== undefined) {
            object[element[1]].push(element[0])
        } else {
            object[element[1]] = []
            object[element[1]].push(element[0])
        }
    }

    let temp = Object.entries(object).sort((a, b) => b[0] - a[0])
    const result = [];

    for (const item of temp) {
        if (countPalce <= 3) {
            item[1] = item[1].sort().reverse();
            let el = [+item[0], ...item[1]]

            result.push(el);
            if (item[1].length == 3) {
                break;
            } else if (item[1].length == 2) {
                result.push([]);
                countPalce++;
            }
            countPalce += item[1].length;
        } else {
            break;
        }
    }

    while (result.length < 3) {
        result.push([])
    }

    return result.sort((a, b) => b[0] - a[0]).splice(0, 3);
}

console.log(hallOfFame([["Clo", 500], ["Ben", 500], ["Aya", 500], ["Dan", 300], ["Eva", 100]]));