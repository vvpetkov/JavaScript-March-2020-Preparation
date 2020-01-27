const input = ['4', '5', '4', 'ivan', 'stamat'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const a = +gets();
const b = +gets();
const c = +gets();

// const isAEqualToB = a === b;
// const isAEqualToC = a === c;

// print(isAEqualToB);
// print(isAEqualToC);

// const isADifferentThanB = a !== b;

const ivan = gets();
const stamat = gets();
// const isIvanEqualToStamat = ivan === stamat;
// const isIvanDifferentToStamat = ivan !== stamat;

// print(isIvanEqualToStamat);
// print(isIvanDifferentToStamat);

// const skorchev = true;
// const georgi = false;

// print(skorchev === georgi);

const numA = 5;
const numB = 6;
const numC = 6;

// print(numA > numB);
// print(numA < numB);
// print(numC > numB);
// print(numC < numB);
// print(numC <= numB);
// print(numC >= numB);

// const logicalAnd = true && true && false && true && true && true && false;

// print(logicalAnd);

// const logicalOr = false || false || false || true;

// print(logicalOr);

// const bug = !(true || true);

// const nikolay = true && (false || true);
// print(nikolay);

// const age = 35;

// const isChild = age < 12;
// const isTeen = age >= 12 && age < 20;
// const isAdult = age >= 20 && age <= 65;
// const isPensioner = age > 65;

// const isWorkAge = !isChild && !isTeen && isAdult && !isPensioner;

// print(isWorkAge);

// const isDay = false;

// if (isDay) {
//   print('It is a day!');
// } else {
//   print('It is a night!');
// }

// const hour = 1000;

// if (hour >= 6 && hour <= 10) {
//   print('Good morning!');
// } else if (hour > 10 && hour < 20) {
//   print('Good day');
// } else if (hour >= 20 && hour < 23) {
//   print('Good evening!');
// } else {
//   print('Wrong Number!');
// }

// if (true) {
//   print('Outer');

//   if (true) {
//     print('Middle');

//     if (true) {
//       print('Inner');
//     }
//   }
// }

// const name = 'fsddfsdff';

// switch (name) {
//   case 'ivan': print('This is Ivan!'); break;
//   case 'stavri': print('This is Stavri!'); break;
//   default: print('I do not know who are you!!!'); break;
// }
