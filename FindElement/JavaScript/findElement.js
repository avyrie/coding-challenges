const example1 = { array: [1, 2, 3, 4, 5, 6], k: 6 } 
// Should return "YES"
const example2 = { array: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'], k: 'pink' } 
// Should return "NO"
const example3 = { array: [11, 76, 24, 97, 3425, 'red', '4', 'heron'], k: 'laser' } 
// Should return "NO"


// ----- Solution #1 -----

const findElement = (args) => {
    if (args.array.includes(args.k)) {
        return "YES"
    } else {
        return "NO"
    }
}
console.log(findElement(example1))