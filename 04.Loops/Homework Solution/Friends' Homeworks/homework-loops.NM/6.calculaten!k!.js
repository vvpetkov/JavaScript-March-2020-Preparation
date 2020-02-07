//сменяш n, x, че да тестваш
let print = this.print || console.log;

let n = 8;
let x = 3;

let N = 1;
let X = 1;
for(let i = 1;i <= n; i++){
N = N * i
if(i <= x){
X = X * i
}
}print(N/X)