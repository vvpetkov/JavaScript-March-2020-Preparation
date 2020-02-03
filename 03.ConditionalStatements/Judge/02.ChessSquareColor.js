const input = ['d', '5'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Constraints
// a <= label <= h
// 1 <= rank <= 8

const label = gets();
const rank = +gets();
let color;
if (label.charCodeAt(0) % 2 !== 0) {
  if (rank % 2 !== 0) {
    color = 'dark';
  } else {
    color = 'light';
  }
} else if (label.charCodeAt(0) % 2 === 0) {
  if (rank % 2 !== 0) {
    color = 'light';
  } else {
    color = 'dark';
  }
}

print(color);
