const example1 = ['elephant', 'dog', 'antelope', 'deer', 'crocodile', 'aardvark', 'eagle', 'cat']
// Should return ['antelope', 'aardvark' 'crocodile', 'cat', 'dog', 'deer', 'elephant', 'eagle']
const example2 = ['glove', 'apple', 'bat', 'ground', 'baseball', 'diamond']
// Should return ['apple', 'bat', 'baseball', 'diamond', 'glove', 'ground']
const example3 = ['water', 'surfing', 'board', 'waves', 'seagull', 'beach ball']
// Should return ['board', 'beach ball', 'surfing', 'seagull', 'water', 'waves']


// ----- Solution #1 -----

const firstLetterSort = (array) => {
    return array.sort((a, b) => {
        if (a[0] < b[0]) {return -1}
        if (a[0] > b[0]) {return 1}
        return 0
    })
}

console.log(firstLetterSort(example3))