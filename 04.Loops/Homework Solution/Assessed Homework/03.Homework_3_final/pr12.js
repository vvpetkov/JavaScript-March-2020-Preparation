const input = ['10'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;


const num = +gets();
let lineLenght = num * 2;
let secondLineStart = 4 * (num - 1);

print(secondLineStart);
let line = '';

if (num >= 1 && num <= 20) {
  for (let index = 1; index <= num; index++) {
    for (let i = index; i < num + index; i++) {
      line += `${i} `;
    }

    print(line);
    line = '';
  }
}