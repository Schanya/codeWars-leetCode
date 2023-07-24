function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let getNumber = (lists) => {
        let res = [];

        while (lists) {
            res.push(lists.val)
            lists = lists.next
        }

        return +res.join('')
    }

    let num1 = getNumber(l1);
    num1 += getNumber(l2);

    let result = num1.toString().split('');

    let resultList = new ListNode(result[0], undefined);

    for (let i = 1; i < result.length; i++) {

        resultList = new ListNode(result[i], resultList)
    }

    return resultList;

};

let arr1 = [2, 4, 9]

let l1 = new ListNode(arr1[0], undefined)

for (let i = 1; i < arr1.length; i++) {

    l1 = new ListNode(arr1[i], l1)
}

let arr2 = [5, 6, 4, 9]

let l2 = new ListNode(arr2[0], undefined)

for (let i = 1; i < arr2.length; i++) {

    l2 = new ListNode(arr2[i], l2)
}

console.log(addTwoNumbers(l1, l2))