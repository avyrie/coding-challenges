const number1 = 12345;
// Should return 1491625
const number2 = 6423;
// Should return 321649
const number3 = 89507;
// Should return 648125049


// ----- Solution #1 -----

const squareEveryDigit1 = (number) => {
    let myArr = String(number).split("").map((num) => {
        return Number(num*num) 
    })
    return Number(myArr.join(""))
}

console.log(squareEveryDigit1(number1))


// ----- Solution #2 -----

const squareEveryDigit2 = (number) => {
   return +number.toString().split('').map(i => i*i).join('');
}

console.log(squareEveryDigit2(number2))


