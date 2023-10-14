const example1 = [[3,0], [9,1], [4,8], [12,2], [6,1], [7,8]]
// Should return 21
const example2 = [[6, 0], [5, 2], [8, 7], [5, 3], [9, 1], [1, 9], [5, 9]]
// Should return 8
const example3 = [[2, 0], [4, 2], [7, 5], [3, 6]]
// Should return 3


// ----- Solution #1 -----

const busStop1 = (busStops) => {
    let count = 0;
    busStops.forEach((person) => {
        count += person[0];
        count -= person[1]
    })
    return count
}

console.log(busStop1(example2))


// ----- Solution #2 -----

const busStop2 = (busStops) => busStops.reduce((stop, [on, off]) => stop + on - off, 0)
console.log(busStop2(example3))