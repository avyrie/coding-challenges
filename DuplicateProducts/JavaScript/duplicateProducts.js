const example1 = { productNames: ['ball', 'bat', 'jersey', 'ball', 'bat', 'glove'], productWeights: [1, 5, 7, 1, 7, 10], productPrices: [5, 10, 15, 5, 20, 25] }
// Should return 1
const example2 = { productNames: ['ball', 'bat', 'bat', 'glove', 'glove', 'glove'], productWeights: [2, 5, 5, 1, 1, 1], productPrices: [2, 3, 3, 1, 2, 1] }
// Should return 2
const example3 = { productNames: ['shirt', 'ball', 'jersey', 'shirt', 'bat', 'ball', 'jersey', 'shirt'], productWeights: [2, 1, 4, 2, 6, 1, 4, 3], productPrices: [5, 3, 10, 5, 7, 3, 10, 9] }
// Should return 3


// ----- Solution #1 -----

const duplicateProducts = (args) => {
    let arr = [];
    let count = 0;
    arr.push(([args.productNames[0], args.productPrices[0], args.productWeights[0]]).toString())

    for (let i = 1; i < args.productNames.length; i++) {
        if (arr.includes(([args.productNames[i], args.productPrices[i], args.productWeights[i]]).toString())) {
            
            count = count +1
        } else {
            arr.push(([args.productNames[i], args.productPrices[i], args.productWeights[i]]).toString());
        }  
    }
    return count;
}

console.log(duplicateProducts(example3))