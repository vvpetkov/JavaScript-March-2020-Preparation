let numbers = '';
const n = 3;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    numbers += `${i} `;
  }
}

console.log(numbers);