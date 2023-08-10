const format = function (str, obj) {
    if (Array.isArray(obj)) {
        let i = 0;

        while (i < obj.length) {
            str = str.replace(`{${i}}`, obj[i]);

            i++;
        }
    } else {
        const arrKeys = Object.keys(obj);
        const arrValues = Object.values(obj);
        let i = 0;

        while (i < arrKeys.length) {
            const value = obj[arrKeys[i]].replaceAll('{', '[').replaceAll('}', ']');

            str = str.replaceAll(`{${arrKeys[i]}}`, value);

            i++;
        }
    }

    return str.replaceAll('[', '{').replaceAll(']', '}')
};

var s = 'Hello {foo} - {foobar} make me a {bar}... {foo}!!?';
var o = { bar: 'sandwich {foo}', foo: 'Jack' }

console.log(format(s, o));