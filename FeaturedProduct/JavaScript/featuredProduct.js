const example1 = ['red', 'green', 'red', 'orange', 'black', 'black']
// Should return 'red'
const example2 = ['purple', 'purple', 'black', 'orange', 'black', 'pink', 'black']
// Should return 'black'
const example3 = ['green', 'orange', 'yellow', 'yellow', 'green', 'pink', 'red', 'orange', 'yellow', 'orange']
// Should return 'yellow'

// ----- Solution #1 -----

const featuredProduct1 = (products) => {
    let featured = {};
    let arr = [];
    // Populates the empty object with the products as keys and the number of each product as the value
    for (let i = 0; i < products.length; i++) {
        if(!featured[products[i]]) {
            featured[products[i]] = 1
        } else {
            featured[products[i]] += 1
        }
    }
    // Maps the values to an array
    let array = Object.keys(featured).map((key) => {
        return featured[key]
    })
    // Isolates the largest number amongst the values
    let maxSold = Math.max(...array)
    // Pushes the products that have the highest amount sold to an empty array
    for (let i = 0; i < Object.keys(featured).length; i++) {
        if (featured[Object.keys(featured)[i]] === maxSold) {
            arr.push(Object.keys(featured)[i])
        }
    }
    // Sorts the array of highest amount sold alphabetically
    const finalArray = arr.sort()
    // Returns the last value in the array of items with the highest amount sold
    return finalArray.slice(-1)[0]
}

console.log(featuredProduct1(example1))


// ----- Solution #2 -----

const featuredProduct2 = (products) => {
    let featured = []
    // Creates an array of arrays that contain each element repeated the number of times they appear in the array
    for (let i = 0; i < products.length; i++) {
        featured.push(products.filter((product) => product === products[i]))
    }
    // Creates an array based on the previous array that only contains sub arrays with elements that appear in the original array the most times. This could contain one item or multiple if they appear the same amount of times.
    return featured.filter((product) => product.length === Math.max(...(featured.map(el => el.length))))
    // Sorts the array so that the sub array that contains the element that is last alphabetically appears first
    .sort((a, b) => {
        if (a[0] > b[0]) return -1
    })
    [0][0]
}
console.log(featuredProduct2(example2))


