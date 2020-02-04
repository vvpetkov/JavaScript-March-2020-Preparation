// ако искаш да тестваш добавяш махаш от array.

let array = [2, 5, 1, 3]

console.log('min = ' + Math.min(...array));
console.log('max = ' + Math.max(...array));
let sum = 0; 
let n = array.length;

for (let i = 0; i < array.length; i++) {
    sum += Number(array[i])
  }
  console.log('sum =' + sum.toFixed(2));
  let avg = sum / n;
  console.log('avg =' + avg.toFixed(2));