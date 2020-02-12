// Prep/Arrays/Homework Solution
// Problem 2. Compare Character Arrays Lexicographically
// 02.Compare-Character-Arrays-Lexicographically.js

const input = [
  'telerik', // On the first line you will receive the first array as string
  'teleric'  // On the second line you will receive the second array as string
];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// можем да направим 2 масива от 2 та стринга в инпута
// и да почнем да сравняваме елемент по елемент 
// сравняването ще правим със съответният му номер по аски таблицата
// ако някой от елементите на първият масив е  < следва резултат First
// ако някой от елементите на първият масив е  > следва резултат Second
// ако всички са равни следва резултат Equal

// изваждаме елементите от масива на инпута и те стават отделни стрингове
let firstArr = input.shift();  // вадим първи елемент
let secondArr = input.pop()    // вадим последен елемент
print(firstArr);   // telerik
print(secondArr);  // teleric

// как да разделя думите на стринг на букви разделени със запетая?
// правим нови променливи като присвоявам старите със разделяне

let firstStrToEl = firstArr.split('');
let secondStrToEl = secondArr.split('');
print(firstStrToEl);  // ["t", "e", "l", "e", "r", "i", "k"]
print(secondStrToEl); // ["t", "e", "l", "e", "r", "i", "c"]


// print(firstStrToEl.charCodeAt(6));  // не става 
// искам да ги направя от масиви на стринг, защото не можах да вадя 
// на елементите кода по аски таблица от масив , мога само от стринг!
// .join
let firstStr = firstStrToEl.join();
let secondStr = secondStrToEl.join();
print(firstStr);  // t,e,l,e,r,i,k
print(secondStr); // t,e,l,e,r,i,c

// ще завъртя цикъл за да обхождам елементите и да ги сравнявам
/*
не става така! логиката ми издиша! иначе технически, форчето провери всички букви и ги сравни!
for (let i = 0; i < firstStr.length; i++) {
  if ( firstStr.charCodeAt(i) < secondStr.charCodeAt(i)){
    print('First')
  } else if (firstStr.charCodeAt(i) > secondStr.charCodeAt(i)) {
    print ('Second')
  } else {
    print ('Equal')
  }
}
*/

// Пускам видеото на лекцията на 2:17 :) 
// търсим localeCompare()


