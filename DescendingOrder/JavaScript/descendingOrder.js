const example1 = ['long', 'longer', 'longest', 'longlierest', 'short', 'shor', 'sho', 'sh'];
// Should return ['longlierest', 'longest', 'longer', 'short', 'shor', 'long', 'sho', 'sh']
const example2 = ['random', 'words', 'exist', 'in', 'this', 'array'];
// Should return ['random', 'words', 'exist', 'array', 'this', 'in']
const example3 = ['never', 'gonna', 'give', 'you', 'up'];
// Should return ['never', 'gonna', 'give', 'you', 'up']


// ----- Solution #1 -----

const descendingOrder = (array) => {
    return array.sort((a, b) => {
        if (a.length > b.length) {return -1}
        if (a.length < b.length) {return 1}
        return 0 
    })
}


console.log(descendingOrder(example3))