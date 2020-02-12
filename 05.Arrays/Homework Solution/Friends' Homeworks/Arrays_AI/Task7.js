// Problem 7. Is Array in Wave Form
// Write a program that determines if an array of numbers is in Wave Form -
// e.g. first > second < third > fourth < fifth > ...
const input = ['2', '19', '10', '41'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const arrayMax = [];
for (let i = 0; i <= input.length - 1; i++) {
  arrayMax.push(+gets());
}
let isWaveForm; // декларираме променлива, на която да присвояваме 'Yes' или 'No', в зависимост от това дали масивът е 'вълнообразен' или не
// разглеждаме случаите, в които започваме от първо число > второ и второ по-малко от трето, като проверяваме дали редицата е четна или нечетна
if ((arrayMax[1] > arrayMax[0]) && (arrayMax[1] > arrayMax[2])) {
  for (let i = 1; i < arrayMax.length - 1; i += 2) { // започваме от второто число, защото знаем, че първото число е по-голямо и следователно изпълнява условието
    if ((arrayMax[i] > arrayMax[i - 1]) && (arrayMax[i] > arrayMax[i + 1])) {
      isWaveForm = 'Yes';
    } else {
      isWaveForm = 'No'; break; // ако условието не е изпълнено, приключваме с проверката
    }
  }
  if (isWaveForm === 'Yes' && arrayMax.length % 2 === 0) {
    if (arrayMax[arrayMax.length - 1] <= arrayMax[arrayMax.length - 2]) {
      isWaveForm = 'No';
    }
  }
} else if ((arrayMax[1] < arrayMax[0]) && (arrayMax[1] < arrayMax[2])) {
  for (let i = 1; i < arrayMax.length - 1; i += 2) {
    if ((arrayMax[i] < arrayMax[i - 1]) && (arrayMax[i] < arrayMax[i + 1])) {
      isWaveForm = 'Yes'; // ако намерим каквото и да е неравенство, приключваме с проверката
    } else {
      isWaveForm = 'No'; break;
    }
  }
  if (isWaveForm === 'Yes' && arrayMax.length % 2 === 0) {
    if (arrayMax[arrayMax.length - 1] >= arrayMax[arrayMax.length - 2]) {
      isWaveForm = 'No';
    }
  }
} else isWaveForm = 'No'; // във всички останали случаи нямаме вълнообразен масив (примерно когато числата в него са 2 или по-малко, или пък второто е равно на третото и тн)
print(isWaveForm);
