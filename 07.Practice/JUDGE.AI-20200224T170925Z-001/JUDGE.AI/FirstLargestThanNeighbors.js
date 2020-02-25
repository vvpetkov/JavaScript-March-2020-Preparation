// First Largest Than Neighbors

// Write a method that returns the index of the first element in array that is larger than its neighbours, or -1, if there is no such element.

// Input
// On the first line you will receive the number N - the size of the array
// On the second line you will receive N numbers sepated by spaces - the array
// Output
// Print the index of the first element that is larger than its neighbours or -1 if none are
const input = ['6', '12 15 17 10 18 14'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const numberOfItems = +gets();
const arr = gets().split(' ').map(Number);
for (let i = 1; i < numberOfItems - 1; i++) {
  if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
    print(i); break;
  } else {
    continue;
  }
}
