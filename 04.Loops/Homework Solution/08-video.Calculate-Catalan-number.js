// Prep/Loops/Homeworks
// 08. video

const input = ["0"];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();

let f1 = BigInt(1);
let f2 = BigInt(1);
let f3 = BigInt(1);

for (let i = 1; i <= 2 * n; i++) {
  f1 *= BigInt(i);

  if (i <= n + 1) {
    f2 *= BigInt(i);
  }

  if (i <= n) {
    f3 *= BigInt(i);
  }
}

let catalan = f1 / (f2 * f3);

print(Number(catalan));
