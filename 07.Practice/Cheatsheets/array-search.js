let numbers = '1,2,3,3,5'.split(',').map(Number);

let numbersExist = Array(numbers.length);

for (let i = 0; i < numbers.length; i += 1) {
    numbersExist[numbers[i]] = true;
}

let nonExistingNumbers = [];
for (let i = 0; i < numbersExist.length; i += 1) {
    if (!numbersExist[i] && i !== 0) {
        nonExistingNumbers.push(i);
    }
}
console.log(nonExistingNumbers.join(','));
