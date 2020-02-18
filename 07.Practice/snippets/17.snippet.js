const numbersA = [1, 2, 3];
const numbersB = numbersA;
const numbersC = numbersA.slice();

numbersA.push(0);
numbersB.push(0);
numbersC.push(0);

console.log(numbersA);
console.log(numbersB);
console.log(numbersC);
