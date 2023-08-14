function multiply(a, b) {

    if (a == '0' || b == '0') return '0'

    const aa = a.split('').reverse();
    const bb = b.split('').reverse();

    const stack = [];

    for (let i = 0; i < aa.length; i++) {
        for (let j = 0; j < bb.length; j++) {
            const m = aa[i] * bb[j];
            stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
        }
    }

    for (let i = 0; i < stack.length; i++) {
        const num = stack[i] % 10;
        const move = Math.floor(stack[i] / 10);
        stack[i] = num;

        if (stack[i + 1])
            stack[i + 1] += move;
        else if (move != 0)
            stack[i + 1] = move;
    }


    return stack.reverse().join('');
}

console.log(multiply('2', '3'));