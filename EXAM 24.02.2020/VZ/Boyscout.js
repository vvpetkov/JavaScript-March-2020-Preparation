let input = ['Ch', '3'];
let gets = this.gets || ((input, index) => () => input[index++]) (input, 0);
const print = this.print || console.log;

let teamsName = gets().toLocaleLowerCase();
let n = +gets();

let result = teamsName.slice(0, 3);
let output = '';

for (let i = 1; i <= n; i++) {
  output += result + ''; 
}
print(output);