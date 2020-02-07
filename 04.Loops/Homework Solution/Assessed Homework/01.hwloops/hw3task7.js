// let input = ['2'];
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// let print = this.print || console.log;

// let n = +gets();

// for (let i = 1; i <= n; i++){
//   let line = '';

//   for (let j = i; j < i + n; j++) {
//   line += `${j} `;
//  }

// print(line);
// }

// let input = ['3'];
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// let print = this.print || console.log;

// let n = +gets();

// for (let i = 1; i <= n; i++){
//   let line = '';

//   for (let j = i; j < i + n; j++) {
//   line += `${j} `;
//  }

// print(line);
// }

let input = ['3'];
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let print = this.print || console.log;

let n = +gets();

for (let i = 1; i <= n; i++){
  let line = '';

  for (let j = i; j < i + n; j++) {
  line += `${j} `;
 }

print(line);
}
