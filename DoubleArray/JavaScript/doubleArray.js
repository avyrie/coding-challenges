const example1 = [4, 8, 12, 5]
// Should return [8, 16, 24, 10]
const example2 = [40, 100, 35, 6, 12, 3, 1]
// Should return [80, 200, 70, 12, 24, 6, 2]
const example3 = [60, 34, 9, 10, 20, 3, 33, 22]
// Should return [120, 68, 18, 20, 40, 6, 66, 44]


// ----- Solution #1 -----

const doubleArray = (array) => {
    return array.map((x) => x * 2)
}

console.log(doubleArray(example1))