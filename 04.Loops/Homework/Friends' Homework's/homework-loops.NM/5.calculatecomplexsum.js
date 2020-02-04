
let n = 5;
let x = -4;

let N = 1;
let nxn = 1;
let sum = 1;
for (let i = 1; i <= n; i++) {
N = N * i;
nxn = N/(Math.pow(x,i));
sum += nxn
}console.log(sum.toFixed(5))
