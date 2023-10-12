const example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// Should return "(123) 456-7890"
const example2 = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
// Should return "(121) 212-1212"
const example3 = [6, 7, 8, 1, 2, 3, 0, 9, 4, 4]
// Should return "(678) 123-0944"

// ----- Solution #1 -----

const createPhoneNumber1 = (numbers) => {
    let phoneNumber = "(xxx) xxx-xxxx";

    for (let i = 0; i < numbers.length; i++) {
        phoneNumber = phoneNumber.replace('x', numbers[i])
    }
    return phoneNumber
}

console.log(createPhoneNumber1(example1))


// ----- Solution #2 -----

const createPhoneNumber2 = (numbers) => {
    let part1 = `${numbers[0]}${numbers[1]}${numbers[2]}`
    let part2 = `${numbers[3]}${numbers[4]}${numbers[5]}`
    let part3 = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    
    return `(${part1}) ${part2}-${part3}` 
}

console.log(createPhoneNumber2(example2))


// ----- Solution #3 -----

const createPhoneNumber3 = (numbers) => {
    let areaCode = numbers.slice(0,3).join('');
    let prefix = numbers.slice(3, 6).join('');
    let local = numbers.slice(-4).join('');

    return `(${areaCode}) ${prefix}-${local}`
}

console.log(createPhoneNumber3(example3))


// ----- Solution #4 -----

const createPhoneNumber4 = (numbers) => {
    let fPart='', sPart='', lPart='';
  for (let i = 0; i <numbers.length; i++){
     if (i < 3) {
        fPart = `${fPart}${numbers[i]}`;
      }
     if (i >= 3 && i < 6) {
        sPart = `${sPart}${numbers[i]}`;
      }
     if (i >= 6 && i < 10) {
        lPart = `${lPart}${numbers[i]}`;
      }
  } 

  return `(${fPart}) ${sPart}-${lPart}`;
}

console.log(createPhoneNumber4(example1))


// ----- Solution #5 -----

const createPhoneNumber5 = (numbers) => {
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
}

console.log(createPhoneNumber5(example1))


// ----- Solution #5 -----

const createPhoneNumber6 = (numbers) => {
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}

console.log(createPhoneNumber6(example2))