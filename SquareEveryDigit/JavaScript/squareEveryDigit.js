const number1 = 12345;
// Should return 1491625


// ----- Solution #1 -----

const squareEveryDigit1 = (number) => {
    let myArr = String(number).split("").map((num) => {
        return Number(num*num) 
    })
    return Number(myArr.join(""))
}

console.log(squareEveryDigit1(number1))