// Функция Filter

// function-filter.js

// функц. връща булев резултат
const names = ['Niki', 'Skorchev', 'Kris'];
const filteredNames = names.filter((value) => true);
console.log(filteredNames)
// ["Niki", "Skorchev", "Kris"]


// ако е true елемента остава
// ако е false елемента се маха

// маха елементи от масива 
const names2 = ['Niki', 'Skorchev', 'Kris'];
const filteredNames2 = names2.filter((value) => value === 'Niki');
console.log(filteredNames2)
// ["Niki"]

// маха елементи от масива 
const names3 = ['Niki', 'Skorchev', 'Kris'];
const filteredNames3 = names3.filter((value) => value !== 'Niki');
console.log(filteredNames3)
// ["Skorchev", "Kris"]

// маха елементи от масива 
const names4 = ['Niki', 'Skorchev', 'Kris', 'Niki'];
const filteredNames4 = names4.filter((value) => value !== 'Niki');
console.log(filteredNames4)
// ["Skorchev", "Kris"]

// да оставим само четните 
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers5.filter((el) => el % 2 === 0);
console.log(evenNumbers);
// [2, 4, 6, 8, 10]
