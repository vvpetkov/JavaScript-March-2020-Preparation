// Problem 10. Repeating Numbers
// Write a program that finds the repeating number. All other numbers occur only once.
const input = ['-1 91 15 11 12 43 91 23'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const currentLine = gets(); // извикваме input-a, който изглежда като числа в редица с интервал между тях.
const arrayMax = currentLine.split(' '); // декларираме масив на база на редицата. Използваме интервала за разделител на елементите в създадения масив
arrayMax.sort((a, b) => a - b); // сортирали сме масива.
// Тъй като по условие има само едно число, което се повтаря, ще обходим масива.
// За да проверим кои 2 съседни числа са равни ще сравняваме i-тото число с i+1-вото и когато намерим равенство, ще изкараме i+1-вото.
let repeatingNum;
for (let i = 0; i < arrayMax.length - 1; i++) {
  if (arrayMax[i] === arrayMax[i + 1]) {
    repeatingNum = arrayMax[i + 1];
  }
}
print(repeatingNum);
