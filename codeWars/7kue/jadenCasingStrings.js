String.prototype.toJadenCase = function () {
    return this.split(' ').map(el => {
        el = el.split('');
        el[0] = el[0].toUpperCase();
        el = el.join('')
        return el
    }).join(' ')
};

console.log('test test test test'.toJadenCase())