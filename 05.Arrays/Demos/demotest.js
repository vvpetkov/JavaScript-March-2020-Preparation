
// Loops/Demos
// Repetition
// Demo test


//видео 00:25 
let arr1 = [1, 2, 3];  // заделя място в хийпа и има ключа за референцията
console.log(arr1);

arr1 = [3,2,1];
console.log(arr1);

let arr2 = arr1;    // Този получава същият ключ за референцията за заделената стойност в хийпа на арр1

console.log(arr1);1
console.log(arr2);


arr1.push(10)      // пушването мутира масива, то не променя ключа

console.log(arr1);
console.log(arr2);