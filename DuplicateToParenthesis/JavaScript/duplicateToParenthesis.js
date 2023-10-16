const example1 = 'Beautiful'
// Should return "((()((()("
const example2 = 'Dog'
// Should return "((("
const example3 = '()) $%t '
// Should return "()))((()"


// ----- Solution #1 -----

const duplicateToParenthesis1 = (string) => {
    let newString = [];
    let lowerString = string.toLowerCase()
    for (let i = 0; i < lowerString.length; i++) {
        (lowerString.replaceAll(lowerString[i], '').length) < (lowerString.length - 1) ? newString.push(')'): newString.push('(')
    }

    return newString.join('')
}

console.log(duplicateToParenthesis1(example1))


// ----- Solution #2 -----

const duplicateToParenthesis2 = (string) => {
    return string
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

console.log(duplicateToParenthesis2(example2))