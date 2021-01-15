// Mock Exam (Variant 1) - Crooked Digits
// 01.Crooked-Digits.js

const input = ['1020340567.89'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

// да извадим цифрите и да разкараме всичко което не е цифра
// да съберем всички цифри и ако резултата е по-голям от 9
// повтаряме същата стъпка ???
// Sums the digits of the number N and stores the result back in N

const str = gets();
let digits = [];

for (let i = 0; i < str.length; i++) {
    const currentElement = +str[i];

    if (!Number.isNaN(currentElement)) {
        digits.push(currentElement);
    }
}

while (digits.length > 1) {
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        const currentNumber = digits[i];
        sum += currentNumber;
    }

    digits = sum.toString().split('').map(Number);
}

print(digits[0]);
