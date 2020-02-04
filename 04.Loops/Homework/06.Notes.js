// 06.Notes.js
// Search how you could split the list of values and then you can iterate over them.
// T(°F) = 20°C × 9/5 + 32 = 68 °F
// https://gomakethings.com/es6-foreach-loops-with-vanilla-javascript/

const input = ['0', '15', '30'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


// const copy = [];
// for (let i = 0; i < input.length; i++) {
//   copy.push(input[i]);
// }
// print(copy); // ["0", "15", "30"]

// Converting a for loop to forEach

const copy = [];
input.forEach(function (input) {
  copy.push(input);
});
print(copy); // ["0", "15", "30"]