const example1 = {array1:[1, 2, 5], array2:[1, 2, 3, 4, 5, 6, 7]}
// Should return false
const example2 = {array1:[3, 8], array2:[6, 2, 0, 12, 6, 3, 8, 4, 1]}
// Should return true
const example3 = {array1:[4, 7, 2, 12, 6, 3], array2:[5, 3, 7, 34, 87]}
// Should return false


// ----- Solution #1 -----

const arrayWithinArray1 = (args) => {
    return (args.array2.toString()).includes(args.array1.toString())
}

console.log(arrayWithinArray1(example1))