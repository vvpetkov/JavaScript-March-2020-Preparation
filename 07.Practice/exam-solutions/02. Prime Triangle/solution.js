const input = ['10'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const checkPrime = (num) => {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
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
