// Problem 6. Is Array Symmetric
// Write a program that finds if an array of numbers is symmetric - that is, the first number is equal to the last, the second - to the second last and so on
const input = ['1 2 2 1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const currentLine = gets(); // извикваме input-a, който изглежда като числа в редица с интервал между тях.
const arrayMax = currentLine.split(' '); // декларираме масив на база на редицата. Използваме интервала за разделител на елементите в създадения масив
let isSymmetric; // декларираме променлива, на която да присвояваме 'Yes' или 'No', в зависимост от това дали масивът е симетричен или не
for (let i = 0; i < arrayMax.length; i++) { // обхождаме масива
  if (arrayMax[i] !== arrayMax[arrayMax.length - 1 - i]) { // проверяваме дали първият елемент е равен на последния от масива. Няма значение дали е нечетен или не, тъй като в най-лошия случай елементът ще е равен на себе си
    isSymmetric = 'No'; break; // ако намерим каквото и да е неравенство, приключваме с проверката
  } else {
    isSymmetric = 'Yes';
  }
}
print(isSymmetric);
