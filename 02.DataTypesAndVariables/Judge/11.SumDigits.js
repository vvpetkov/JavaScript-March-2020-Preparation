// Input.
let input = [
    '2346',
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let num = +gets();

let fourthDigit = num % 10; // (6) Всяко число при модулно деление на 10 = последната цифра от числото 
let thirdDigit = Math.floor(num / 10) % 10; // (4) 2346/10 = 234,6 махаме ,6 с floor и остава 234 и %10 = 4
let secondDigit = Math.floor(num / 100) % 10;  // (3) 2346/100 = 23,46 и т.н.
let firstDigit =  Math.floor(num / 1000); // (2)
let sum = firstDigit + secondDigit + thirdDigit + fourthDigit;

print(sum);


let testNum01 = 2346;
let moduloNum01 = testNum01 % 10;
console.log(`Остатъка е ${moduloNum01}, защото всяко число при модулно деление на 10 = последната цифра от числото :)`);

console.log(fourthDigit);
console.log(thirdDigit);
console.log(secondDigit);
console.log(firstDigit);
