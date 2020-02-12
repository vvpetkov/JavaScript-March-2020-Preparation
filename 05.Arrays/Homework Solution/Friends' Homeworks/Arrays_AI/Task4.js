// Problem 4. Is Array Sorted?
// Write a program that determines if an array of numbers is sorted in increasing order.
const input = ['-11 12 12 11'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const currentLine = gets(); // извикваме input-a, който изглежда като числа в редица с интервал между тях.
const arrayMax = currentLine.split(' '); // декларираме масив на база на редицата. Използваме интервала за разделител на елементите в създадения масив
let isSorted; // декларираме променлива, на която да присвояваме стойност 'Yes' или 'No'на база проверка на числата в масива
for (let i = 0; i < arrayMax.length; i++) { // въртим цикъл в рамките на масива, с който проверяваме дали предходното от 2 числа в редицата е по-голямо
  if (arrayMax[i] > arrayMax[i + 1]) {
    isSorted = 'No'; break; // в момента, в който установим, че i-тото число е по-голямо от следващото, спираме проверката и isSorted е равно на 'No'
  } else {
    isSorted = 'Yes'; // ако няма случай, в който предното число да е по-голямо от следващото, значи масивът е сортиран (isSorted = 'Yes')
  }
}
print(isSorted);
