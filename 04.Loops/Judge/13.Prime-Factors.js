// Prep/Loops/Judge/
// Repetition 1:30 video
// 13.Prime-Factors.js

// https://www.mathsisfun.com/prime-factorization.html

// A prime number can only be divided by 1 or itself, so it cannot be factored any further!
/*
let num = 7;
let isPrime = true;
for (let i =2; i <num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
print(isPrime); 
*/
// "Factors" are the numbers you multiply together to get another number:
// A Prime Number is: a whole number greater than 1 that can not be made by multiplying other whole numbers
// Prime Factorization: is finding which prime numbers multiply together to make the original number.
// What are the prime factors of 12 ?
// 12 ÷ 2 = 6
// 6 ÷ 2 = 3
// 12 = 2 × 2 × 3
// What is the prime factorization of 147 ?
// 147 ÷ 2 = 73½ - No it can't.
// 147 ÷ 3 = 49 
// 49 ÷ 7 = 7 (7 is the smallest prime number that works)
// 147 = 3 × 7 × 7
// What is the prime factorization of 17 ?
// 17 is a Prime Number
// 17 = 17   (A prime number can only be divided by 1 or itself, so it cannot be factored any further!)

// There is only one (unique!) set of prime factors for any number.
// https://www.mathsisfun.com/numbers/prime-factorization-tool.html

const input = ['100'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let divider = 2;

while (n > 1) {
  let isDividerPrime = true;

  for (let i = 2; i < divider; i++) {
    if (divider % i === 0) {
      isDividerPrime = false;
      break;
    }
  }

  if (isDividerPrime && n % divider === 0) {
    n /= divider;
    print(divider);
  } else {
    divider++;
  }
}

// you can optimize for big O notation like in video
