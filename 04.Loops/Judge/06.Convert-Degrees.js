// 06.Convert-Degrees.js
// Search how you could split the list of values and then you can iterate over them.
// T(°F) = 20°C × 9/5 + 32 = 68 °F
// https://gomakethings.com/es6-foreach-loops-with-vanilla-javascript/


const input = ['0 15 30'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// explanation forEach() loops in 06.notes.js

let degreesC = gets().split(' ').map(Number);

degreesC.forEach(function (degreesC, index) {
  print(degreesC * (9 / 5) + 32);
});
