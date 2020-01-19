// If you want to you could find a difference between two characters


let diff = 'y'.charCodeAt(0) - 's'.charCodeAt(0);
console.log(diff);

// How we could return it back to a symbol

let char = String.fromCharCode(diff);

// This will point to a certain character in the ASCII table and possibly won't be output on the console

console.log(char);

// How to find the letter in the alphabet 
// 97 is the code of 'a' so we could add 96

let letter = String.fromCharCode(diff + 96);
console.log(letter);
// Solution
// y -> 25
// s -> 19
// y - s = 6
// 6 -> f



let findTheChar = String.fromCharCode(22 + 96);
console.log(findTheChar);

// 22 = v  поредният номер на V 