const input = ['8', '3'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//  S = N! / K!

const N = +gets();
const K = +gets();
let S = 1;

if (K > 1 && K < N && N < 100) {
  for (let i = K + 1; i <= N; i++) {
    S *= i;
  }
}
print(S);
