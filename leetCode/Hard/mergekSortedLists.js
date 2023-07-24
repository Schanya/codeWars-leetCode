
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let res = []

    lists.forEach(l => {
        while (l) {
            res.push(l.val)
            l = l.next
        }
    })
    res.sort((a, b) => b - a)


    if (res.length < 1) {

        return null
    }

    let resu = new ListNode(res[0], undefined)

    for (let i = 1; i < res.length; i++) {

        resu = new ListNode(res[i], resu)
    }


    return resu
};

console.log(mergeKLists([[1, 4, 5], [1, 3, 4], [2, 6]]))