const input = ['-102034gdfg0567.89'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const str = gets();
let digits = [];

for (let i = 0; i < str.length; i += 1) {
    const currentElement = +str[i];

    if (!Number.isNaN(currentElement)) {
        digits.push(currentElement);
    }
}

while (digits.length > 1) {
    let sum = 0;

    for (let i = 0; i < digits.length; i += 1) {
        const currentNumber = digits[i];

        sum += currentNumber;
    }

    digits = sum.toString().split('').map(Number);
}

print(digits[0]);
