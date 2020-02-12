// Problem 5. Find Two Biggest Numbers
// Write a program that finds the two biggest numbers from an array of numbers
const input = ['8 7 8 11 7 11 5 8 10'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const currentLine = gets(); // извикваме input-a, който изглежда като числа в редица с интервал между тях.
const arrayMax = currentLine.split(' '); // декларираме масив на база на редицата. Използваме интервала за разделител на елементите в създадения масив
//  използваме проста arrow функция, която да може да направи правилно сортиране на масива като числа
// сортираме масива, като извикваме и фунццията за превръщане на стринговете в числа
arrayMax.sort((a, b) => a - b); // подробно е описано и на https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const maxNumber = arrayMax.pop(); // използваме, че масивът е сортиран и си създаваме променлива, на която присвояваме последната стойност - тя би трябвало да е максималната
const secondMaxNumber = arrayMax.pop(); // сега масивът е с един елемент по-малко. Изкарваме максималното число отново, по същия начин
const maxNumbersString = maxNumber + ' ' + secondMaxNumber; // oбединяваме 2-те най-големи числа в стринг с интервал между тях, както е се иска за Output-а
print(maxNumbersString);
