const example1 = [1, 9, 7, 13, 11, 6, 19, 3]
// Should return 6
const example2 = [4, 12, 8, 16, 22, 3, 18, 20, 2, 6]
// Should return 3
const example3 = [2, 3, 11, 13, 7, 9]
// Should return 2


// ----- Solution #1 -----

const checkDifferent = (numbers) => {
    let odd = [];
    let even = [];
    numbers.forEach((num) => {
      if (num % 2 === 0) {
        even.push(num)
      } else {odd.push(num)}
    })
    if (odd.length === 1) {
        return odd[0]
    } else if (even.length === 1) {
        return even[0]
    }
  }
  console.log(checkDifferent(example1))