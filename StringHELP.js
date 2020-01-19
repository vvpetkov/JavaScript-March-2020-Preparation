let str = 'ABCD';

let replaced = str.replace('BC', 'test'); // замества съвпадение от символи в стринг с друг стринг 
console.log(replaced);                    // AtestC

let startsWithABC = str.startsWith('ABC');   // проверява дали даден стринг започва с определени символи и връща булев резултат (true или false)
let startsWithTest = str.startsWith('test');
console.log(startsWithABC);   // true
console.log(startsWithTest);  // false

let endsWithABC = str.startsWith('CD');   // проверява дали даден стринг завършва с определени символи и връща булев резултат (true или false)
let endsWithTest = str.startsWith('test');
console.log(endsWithABC);   // true
console.log(endsWithTest);  // false

let substrA = str.substr(0, 2); // ще вземе част от стринг по начален индекс и брой символи
let substrB = str.substr(1, 2); // ще вземе част от стринг по начален индекс и брой символи
let substrC = str.substr(2, 3); // ще вземе част от стринг по начален индекс и брой символи

console.log(substrA); // AB
console.log(substrB); // BC
console.log(substrC); // CD

let charCodeA = str.charCodeAt(0); // ще вземе ascii кода на символ в стринг на определен индекс
let charCodeB = str.charCodeAt(1); // ще вземе ascii кода на символ в стринг на определен индекс
let charCodeC = str.charCodeAt(2); // ще вземе ascii кода на символ в стринг на определен индекс

console.log(charCodeA);            // 65
console.log(charCodeB);            // 66
console.log(charCodeC);            // 67

let symbol = String.fromCharCode(65); // ще превърне ascii код (число) в символ
console.log(symbol);                  // A

let length = str.length;          // ще ни върне броят на символите в даден стринг
console.log(length);              // 4

let char = str.charAt(3);         // ще ни върне символът в даден стринг на определен индекс
console.log(char);                // D

let includes1 = str.includes('BC');   // ще ни върне булев резултат (true или false) в зависимост от това дали даден стринг съдържа в себе си друг стринг
let includes2 = str.includes('test'); // ще ни върне булев резултат (true или false) в зависимост от това дали даден стринг съдържа в себе си друг стринг
console.log(includes1);               // true
console.log(includes2);               // false

let repeated = str.repeat(3);         // ще направи нов стринг като повтори друг N на брой пъти 
console.log(repeated);                // ABCDABCDABCD

let lowercase = str.toLowerCase();    // ще създаде нов стринг в който всички букви ще са малки
console.log(lowercase);               // abcd

let uppercase = lowercase.toUpperCase(); // ще създаде нов стринг в който всички букви ще са големи
console.log(uppercase);                  // ABCD
