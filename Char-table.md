|      |      |      |      |      |      |      |      |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      |      |      |      |      |      |      |      |
|      |      |      |      |      |      |      |      |
|      |      |      |      |      |      |      |      |
|      |      |      | #    | Char | Dec  | Char | Dec  |
|      |      |      | 1    | a    | 97   | A    | 65   |
|      |      |      | 2    | b    | 98   | B    | 66   |
|      |      |      | 3    | c    | 99   | C    | 67   |
|      |      |      | 4    | d    | 100  | D    | 68   |
|      |      |      | 5    | e    | 101  | E    | 69   |
|      |      |      | 6    | f    | 102  | F    | 70   |
|      |      |      | 7    | g    | 103  | G    | 71   |
|      |      |      | 8    | h    | 104  | H    | 72   |
|      |      |      | 9    | i    | 105  | I    | 73   |
|      |      |      | 10   | j    | 106  | J    | 74   |
|      |      |      | 11   | k    | 107  | K    | 75   |
|      |      |      | 12   | l    | 108  | L    | 76   |
|      |      |      | 13   | m    | 109  | M    | 77   |
|      |      |      | 14   | n    | 110  | N    | 78   |
|      |      |      | 15   | o    | 111  | O    | 79   |
|      |      |      | 16   | p    | 112  | P    | 80   |
|      |      |      | 17   | q    | 113  | Q    | 81   |
|      |      |      | 18   | r    | 114  | R    | 82   |
|      |      |      | 19   | s    | 115  | S    | 83   |
|      |      |      | 20   | t    | 116  | T    | 84   |
|      |      |      | 21   | u    | 117  | U    | 85   |
|      |      |      | 22   | v    | 118  | V    | 86   |
|      |      |      | 23   | w    | 119  | W    | 87   |
|      |      |      | 24   | x    | 120  | X    | 88   |
|      |      |      | 25   | y    | 121  | Y    | 89   |
|      |      |      | 26   | z    | 122  | Z    | 90   |


let code = abc.charCodeAt(1);
console.log(code); // b -> 98

let char = String.fromCharCode(98); 
console.log(char) // 98 -> b

// If you want to you could find a difference between two characters

let diff = 'y'.charCodeAt(0) - 's'.charCodeAt(0);
console.log(diff);

// How we could return it back to a symbol

let char = String.fromCharCode(diff); // This will point to a certain character in the ASCII table and possibly won't be output on the console
console.log(char); // 6 -> acknowledge

// How to find the letter in the alphabet 

let letter = String.fromCharCode(diff + 96); // 97 is the code of 'a' so we could add 96
console.log(letter);

// Solution
// y -> 25
// s -> 19
// y - s = 6  
// 6 -> f