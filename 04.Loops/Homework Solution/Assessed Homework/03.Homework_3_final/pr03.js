let input = ['3', '2', '5', '1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets();
let sum = 0;
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
    let num = +gets();
    min = Math.min(min, num);
    max = Math.max(max, num);
    sum += num;
}

let sum1 = sum + n;
let average = sum1 / 4;

print(`min=${min.toFixed(2)}`);
print(`max=${max.toFixed(2)}`);
print(`sum=${sum1.toFixed(2)}`);
print(`avg=${average.toFixed(2)}`);
