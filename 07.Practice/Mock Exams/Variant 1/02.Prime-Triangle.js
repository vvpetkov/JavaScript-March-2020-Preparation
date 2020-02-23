// Mock Exam (Variant 1) - Prime Triangle
// 02.Prime-Triangle.js

const input = ['10'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

/*
Let's say n =10
you need to generate a sequence of 1 to n inclusive
sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
The prime numbers are 1, 2, 3, 5, 7
5 prime numbers, so we print 5 rows
Each row contains all the numbers for 1 to PRIME_NUMBER
Result:
1
1 2
1 2 3
1 2 3 4 5
1 2 3 4 5 6 7

Lets make things simpler:

Print 0 if the numbers is not prime
Print 1 if the number is prime

Final result:

1
1 1
1 1 1
1 1 1 0 1
1 1 1 0 1 0 1
*/

const checkPrime = (num) => {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime
};

const n = +gets();

for (let row = 1; row <= n; row++) {
  if (checkPrime(row)) {
    let line = '';

    for (let col = 1; col <= row; col++) {
      if (checkPrime(col)) {
        line += '1';
      } else {
        line += '0';
      }
    }

    print(line);
  }
}
