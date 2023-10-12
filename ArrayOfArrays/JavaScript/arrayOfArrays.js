const example1 = 6;
// Should return [[0], [1], [2], [3], [4], [5]]
const example2 = 4;
// Should return [[0], [1], [2], [3]]
const example3 = 1;
// Should return [[0]]


// ----- Solution #1 -----

const arrayOfArrays1 = (n) => {
    let arrayArrays = [];
    for (let i = 0; i < n; i++) {
        arrayArrays.push([i])
    }
    return arrayArrays
}
console.log(arrayOfArrays1(example1))


// ----- Solution #2 -----

const arrayOfArrays2 = (n) => {
    return new Array(n).fill(null).map((x, i) => [i])
}
console.log(arrayOfArrays2(example2))