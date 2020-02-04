const input = ['2', '-1', '4', '1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
const nArr = [];

for (let i = 0; i < n; i++) {
  nArr.push(+gets());
}

const min = Math.min(...nArr);
const max = Math.max(...nArr);
const sum = (nArr.reduce((a, b) => a + b, 0)) + n;
const avg = sum / (nArr.length + 1);

print(`min = ${min.toFixed(2)}`);
print(`max = ${max.toFixed(2)}`);
print(`sum = ${sum.toFixed(2)}`);
print(`avg = ${avg.toFixed(2)}`);
