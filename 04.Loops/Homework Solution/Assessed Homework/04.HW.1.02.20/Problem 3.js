const input = [
    '3',
    '2',
    '-1',
    '4',
];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();
let sum = 0;
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
    let x = +gets();

    max = Math.max(max, x);
    min = Math.min(min, x);
    sum += x;
}

print(`min=${min}`);
print(`max=${max}`);
print(`sum=${sum}`);
print(`avg=${(sum / n).toFixed(2)}`);