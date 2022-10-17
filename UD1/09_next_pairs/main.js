const assert = require('assert').strict;

function nextPairs(value) {
    const value2 = value
    const pairless = value2
    const pairplus = value2
    value2 % 2 == 0 ? console.log(pairless - 2) : console.log(pairless - 1)
    value2 % 2 == 0 ? console.log(pairplus + 2) : console.log(pairplus + 1)
    return [pairless, pairplus]
}
console.log(nextPairs(4))
// assert.deepStrictEqual(nextPairs(3), [2, 4])
 assert.deepStrictEqual(nextPairs(4), [2, 6])