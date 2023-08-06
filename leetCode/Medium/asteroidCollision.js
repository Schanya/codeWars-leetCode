/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

const whoSurvive = (asteroid1, asteroid2) => {
    if (Math.abs(asteroid1) < Math.abs(asteroid2)) return asteroid2;

    if (Math.abs(asteroid1) == Math.abs(asteroid2)) return 0;

    return asteroid1;
}

var asteroidCollision = function (asteroids) {
    let result = [];
    for (let i = 0; i < asteroids.length;) {
        const element = asteroids[i];
        if (Math.sign(element) > 0) {
            if (Math.sign(element) != Math.sign(asteroids[i + 1] ?? 1)) {
                const survive = whoSurvive(element, asteroids[i + 1]);
                if (survive != 0) {
                    let surviveIndex = survive == element ? i : i + 1;
                    surviveIndex == i ? ++surviveIndex : --surviveIndex;
                    asteroids.splice(surviveIndex, 1)
                    i = 0;
                    continue;
                } else {
                    asteroids.splice(i, 2)
                    i = 0;
                    continue;
                }
            }
        } else {
            if (Math.sign(element) != Math.sign(asteroids[i - 1] ?? -1)) {
                const survive = whoSurvive(element, asteroids[i - 1]);
                if (survive != 0) {
                    let surviveIndex = survive == element ? i : i - 1;
                    surviveIndex == i ? --surviveIndex : ++surviveIndex;
                    asteroids.splice(surviveIndex, 1)
                    i = 0;
                    continue;
                } else {
                    asteroids.splice(i, 2)
                    i = 0;
                    continue;
                }
            }
        }

        i++;

    }

    return asteroids

};
const asteroids = [1, -1, 1, -1]
console.log(asteroidCollision(asteroids));