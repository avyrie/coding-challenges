// ----- Challenge -----


// ----- Solution #1 -----

const createPhoneNumber1 = () => {
    let number = '(xxx) xxx-xxxx';

    for (let i = 0; i <= 10; i++) {
        number = number.replace('x',(Math.floor(Math.random() * 9)))
    }
    
    return number
}

console.log(createPhoneNumber1())