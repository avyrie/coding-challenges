const example1 = 8;
// Should return 1, 2, 3, 4, 5, 6, 7, 8
const example2 = 2;
// Should return 1, 2, 3, 4, 5
const example3 = 6;
// Should return 1, 2, 3, 4, 5, 6


// ----- Solution #1 -----

const atLeastFive = (num) => {
    if(num < 5) {
        num = 5
    }
    for(let i = 1; i <= num; i++) {
        console.log(i)
    } 
}
atLeastFive(example1)


// ----- Solution #2 -----

const logAtLeastFive = (num) => {
    for (let i = 1; i <= Math.max(5, num); i++) {
        console.log(i)
    }
}
logAtLeastFive(example2)