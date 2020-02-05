let input = ['5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let N = +gets();
let arrN = [];
let arrNN = [];

if (N >= 1 && N <= 20) {
  for (var i = 1; i <= N; i++) {
    arrN.push(i);
  } print((arrN.toString()).replace(/,/g, " ")); //[ 1, 2, 3, 4 ]

  for (var a = 0; a < N - 1; a++) {
    for (var j = 0; j < N; j++) {
      arrN[j] = arrN[j] + 1
    } print((arrN.toString()).replace(/,/g, " "));
  }
}
