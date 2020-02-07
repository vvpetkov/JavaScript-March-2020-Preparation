let input = ["100000", "13.5", "13.5", "1", "7", "8"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const n = +gets();
let zeros = 0;
for (let i = 5; n / i >= 1; i *= 5) {
  zeros += n / i;
}
print(Math.floor(zeros));
