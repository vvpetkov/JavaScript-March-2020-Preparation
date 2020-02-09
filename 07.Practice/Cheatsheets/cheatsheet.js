// Number

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isNaN(NaN));

// string to number
console.log(Number('123'));
console.log(+'123');

let stringifiedNumber = String(123473);
let wholeNumber = stringifiedNumber.substring(0, stringifiedNumber.length - 2);
let decimals = stringifiedNumber.substring(stringifiedNumber.length - 2);

// String
console.log('Telerik Academy'.length);
console.log('Telerik Academy'.charAt(1));
console.log('Telerik Academy'[1]);
console.log('Telerik Academy'.charCodeAt(1));
console.log('Telerik Academy'.includes('Academy', 9));
console.log('Telerik Academy'.indexOf('Academy'));
console.log('Telerik Academy'.indexOf('no match'));
console.log('Telerik Academy'.replace('Academy', 'Ninja'));
console.log('   Telerik Academy   '.trim());
console.log('Telerik Academy'.slice(3, 8));
console.log('Telerik Academy'.substring(3, 8));
console.log('Telerik Academy'.substr(3, 2));

// Math
console.log(Math.pow(3, 2));
console.log(Math.ceil(3.1));
console.log(Math.floor(3.7));
console.log(Math.trunc(-4.3));
console.log(Math.round(3.5));
console.log(Math.abs(-3.5));
console.log(Math.sqrt(9));
console.log(Math.max(...[1, 2, 3]));
console.log(Math.min(...[1, 2, 3]));

// reverse string
// 'abcdef' -> 'fedcba'

let reversedString = 'abcdef'.split('').reverse().join('');
console.log(reversedString);
