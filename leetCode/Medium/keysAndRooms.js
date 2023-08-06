/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const keys = new Set();

    let roomKeys = rooms[0];
    while (roomKeys.length) {
        keys.add(roomKeys.pop())
    }

    for (const key of keys) {
        while (rooms[key].length) {
            let temp = rooms[key].pop();
            if (temp != 0) {
                keys.add(temp)
            }

        }
    }

    return keys.size == rooms.length - 1;
};
const rooms = [[1, 3], [3, 0, 1], [2], [0]];
console.log(canVisitAllRooms(rooms));