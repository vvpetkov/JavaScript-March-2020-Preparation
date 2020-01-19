let parsedNumber = Number('5'); // превръща число което е стринг в число от тип Number
console.log(parsedNumber);      // 5

let maxSafeInteger = Number.MAX_SAFE_INTEGER;  // най-голямото число от тип Number
console.log(maxSafeInteger);                   // 9007199254740991

let minSafeInteger = Number.MIN_SAFE_INTEGER;  // най-малкото число от тип Number
console.log(minSafeInteger);                   // -9007199254740991

// toFixed форматира дадено число до N брой знаци след десетичната запетая и го превръща в стринг
let num = 5.25;
console.log(num.toFixed(0));  // 5
console.log(num.toFixed(1));  // 5.3
console.log(num.toFixed(2));  // 5.25
console.log(num.toFixed(3));  // 5.250
console.log(num.toFixed(4));  // 5.2500
console.log(num.toFixed(5));  // 5.25000
