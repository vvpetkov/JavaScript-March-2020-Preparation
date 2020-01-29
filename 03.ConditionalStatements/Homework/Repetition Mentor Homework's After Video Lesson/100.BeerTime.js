// 100.BeerTime.js

const input = ['1:00 PM'];

const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let inputTime = gets().split(' ');

let time = inputTime[0].split(':');
let hour = +time[0];
let minute = +time[1];
let designator = inputTime[1];

let isValidTime = (designator === 'AM' || designator === 'PM') &&
  (hour >= 0 && hour <= 12) &&
  (minute >= 0 && minute <= 59);

if (isValidTime) {
  if (designator === 'AM') {
    if (hour >= 0 && hour < 3) {
      print('beer time');
    } else {
      print('non-beer time');
    }
  } else if (designator === 'PM') {
    if (hour >= 1 && hour < 12) {
      print('beer time');
    } else {
      print('non-beer time');
    }
  }

} else {
  print('invalid time');
}
