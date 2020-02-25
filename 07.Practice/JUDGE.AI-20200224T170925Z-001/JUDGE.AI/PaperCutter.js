// Paper Cutter

// The Triwizard tournament continues and you are faced with yet another challenge. This time, you have to craft confetti out of some very expensive sheets of paper. Again, you rely on your programming mastery in order to complete this challenge.

// A10 is a standard for paper size. A9 is another standard that is twice as big as A10, so A9 can be cut into 2 pieces of size A10. A8 is twice as big as A9 and so on. A0 is twice as big as A1. See the picture.

// You are given one sheet of each A size standard from 0 to 10, which means you have 11 sheets in total. You need to cut N amount of A10 sized pieces out of the sheets you have, using as few of them as possible (without leaving any semi­cut sheets!).

// For example, if you receive the number 9 as N, you need to craft 9 pieces of size A10 by cutting the sheets you have. You would use:

// The A7 sheet ­ cut it into 8 pieces of size A10. (A7 is 8 times as big as A10)
// The A10 sheet ­ which you already have.
// In that case, you would have used only two sheets. All other 9 sheets would not be used and they should be printed on the console. The order of printing of the sheets does not matter.

// Input
// Read from the standard input
// On the first line, find the integer N
// Output
// Print to the standard output
// Each line should consist of sheet size, not used in the cutting
// i.e. the remaining sheets
// ordered lexicographically
// Contraints
// The input data will always be valid and in the format described
// 1 <= N <= 2046
const input = ['2030'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const arrayOfSheets = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'];
const arrayOfSheetsToNumber = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
let numberOfSheets = +gets();
for (let i = 0; i < arrayOfSheets.length; i++) {
  if (numberOfSheets < arrayOfSheetsToNumber[i]) {
    print(arrayOfSheets[i]);
  } else (numberOfSheets = numberOfSheets % arrayOfSheetsToNumber[i]);
}
