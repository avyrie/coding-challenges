const example1 = [1, 2, 3, 7, 6, 2]
// Should return [504, 252, 168, 72, 84, 252]
const example2 = [5, 8, 2, 3]
// Should return [48, 30, 120, 80]
const example3 = [10, 4, 1, 6, 5]
// Should return [120, 300, 1200, 200, 240]

// ----- Solution #1 ----- O(n) time

function arrayOfProducts1(array) {
    let finalArray = [];
	for (let i = 0; i < array.length; i++) {
		let filterArray = array.splice(0, 1)
        let noI = array.reduce((currentTotal, num) => { return num * currentTotal })
        finalArray.push(noI)
        array.push(filterArray[0])
        filterArray.pop()
    }

	return finalArray
}

console.log(arrayOfProducts1(example1))


// ----- Solution #2 ----- 

function arrayOfProducts2(array) {
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
        finalArray.push((array.reduce((total, currentValue) => {
            return total * currentValue
        }))/array[i])
    }

    return finalArray
}

console.log(arrayOfProducts2(example2))