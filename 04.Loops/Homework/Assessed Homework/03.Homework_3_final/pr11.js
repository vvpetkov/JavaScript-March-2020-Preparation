const input = ['100000'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let n = +gets();
let counter = 0;
let remainder = n % 10;

while (remainder === 0) {
  counter++;
  n /= 10;
  remainder += n % 10;
}

print(counter);

function factorial (number) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }

  return factorial;
}