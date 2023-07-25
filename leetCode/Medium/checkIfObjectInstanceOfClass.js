/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined) {
        return false;
    }

    let prototype = Object.getPrototypeOf(obj);

    while (prototype !== null) {
        if (prototype.constructor === classFunction) {
            return true;
        }

        prototype = Object.getPrototypeOf(prototype)
    }
    return false
};