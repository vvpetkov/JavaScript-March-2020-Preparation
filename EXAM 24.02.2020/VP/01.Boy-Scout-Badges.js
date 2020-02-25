// Boy Scout Badges
// Boy-Scout-Badges.js
// test-4

const input = ['Chocolate ', '2'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const name = gets();
const n = +gets();
let badge = '';

let first3 = name.substring(0, 3).toLowerCase();

for (let i = 0; i < n; i++) {
  badge += first3
}

print(badge);
