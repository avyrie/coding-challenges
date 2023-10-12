const example1 = {minNum:1, maxNum:50, arrLength:6}
// May return [4, 43, 22, 50, 34, 13]
const example2 = {minNum:10, maxNum:15, arrLength:5}
// May return [11, 15, 13, 12, 10]
const example3 = {minNum:130, maxNum:140, arrLength:3}
// May return [133, 102, 134]


// ----- Solution #1 -----

const randomNumbers1 = (args) => {
    let keys = {}

    while (Object.keys(keys).length < args.arrLength) {
        let number = Math.floor(Math.random() * (args.maxNum - args.minNum) + args.minNum);
        keys[number] = true;
    }

    let randomNumbersArray = Object.keys(keys).map((num) => parseInt(num))
    let shuffledArray = randomNumbersArray.sort(() => Math.random() - 0.5)

    return shuffledArray
}

console.log(randomNumbers1(example1))
// // Thanks to Ron Fybish


// ----- Solution #2 -----

const randomNumbers2 = (args) => {
    return (
        Array(args.maxNum + 1)
        .fill()
        .map((_, i) => i)
        .slice(args.minNum)
    )
        .sort(() => Math.random() - 0.5)
        .slice(0, (args.arrLength))
    
}

console.log(randomNumbers2(example2))
// Thanks to Julian Bovone.
/* 
Explanation: 
Array(max + 1) creates an empty array with a length that is equal to the specified max number + 1. 
.fill() fills the array (with undefined) so it technically has values that we can iterate over it with map. 
.map() iterates over the array and assigns each item as its index (_ is there to hold the place of an unused parameter (item)). 
Math.random() - 0.5 returns either a positive or negative value between -0.5 and 0.5. 
.sort(), If the value returned by Math.random() - 0.5 is positive, the numbers being compared will be sorted with the smaller number coming first. If the value is negative, the opposite is true. This randomizes the order of the items in the array. 
.slice() removes all items in the array from the index that corresponds to the length argument onwards leaving an array with a length of length.
*/


// ----- Solution #3 -----

const randomNumbers3 = (args) => {
    const aSet = new Set;
    while (aSet.size < args.arrLength) {
        aSet
        .add(Math.floor(Math.random() * ((args.maxNum + 1) - args.minNum) + args.minNum));
    }
    return [...aSet] 
}

console.log(randomNumbers3(example3))