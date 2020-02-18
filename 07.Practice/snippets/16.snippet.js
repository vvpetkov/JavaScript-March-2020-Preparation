const numbersA = [1, 2, 3];
const numbersB = [1, 2, 3];
const numbersC = numbersA;
const numbersD = numbersB;

console.log(numbersA === numbersB);
console.log(numbersB === numbersC);
console.log(numbersC === numbersD);
console.log(numbersA === numbersC);
console.log(numbersB === numbersD);
