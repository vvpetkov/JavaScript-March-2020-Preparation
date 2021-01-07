// Prep/Loops/Homeworks
// 07. video

const input = ["52", "5"];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let k = +gets();

let f1 = BigInt(n);
let f2 = BigInt(k);
let f3 = BigInt(n - k);

for (let i = 1; i < n; i++) {
  f1 *= BigInt(i);

  if (i < k) {
    f2 *= BigInt(i);
  }

  if (i < n - k) {
    f3 *= BigInt(i);
  }
}

f2 *= f3;
f1 /= f2;

console.log(f1); // какъв тип данни е това

console.log(typeof(f1)); // bigint тип данни

print(Number(f1));


