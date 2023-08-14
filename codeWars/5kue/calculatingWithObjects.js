class Num {
    constructor(num) {
        this.num = num;
    }

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `The number is ${this.num}` : this.num;
    }
}

Num.prototype[Symbol.toPrimitive] = function (hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `The number is ${this.num}` : this.num;
}

console.log(new Num(5) + new Num(5))