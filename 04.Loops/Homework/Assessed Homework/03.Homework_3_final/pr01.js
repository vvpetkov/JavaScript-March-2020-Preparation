const input = ['5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let numbers = '';

for (let i = 1; i <= n; i++) {
    numbers += `${i} `;
}

print(numbers);