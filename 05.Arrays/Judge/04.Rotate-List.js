// Arrays (Judge) Rotate List (Vld)
// 04.Rotate-List.js

const input = ['2,1,3,4', '5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// The solution starts from here

const list = gets().split(',');
let n = +gets();

while (n > 0) {
  list.push(list.shift()); // не го разбирам
  n--;
}

print(list.join(','));
