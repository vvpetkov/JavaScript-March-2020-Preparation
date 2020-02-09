const namesAsString = 'Ivan-Dragan-Petkan';
const namesAsArray = namesAsString.split('-'); // splitting string into array by '-' separator
console.log(namesAsArray); // [ 'Ivan', 'Dragan', 'Petkan' ]

const symbols = namesAsString.split(''); // splitting string into array by empty string
console.log(symbols); // [ 'I', 'v', 'a', 'n', '-', 'D', 'r', 'a', 'g', 'a', 'n', '-', 'P', 'e', 't', 'k', 'a', 'n' ]

const names = ['Nikolay', 'Neykov'];
const joinedNames = names.join('-'); // joining array into a string by separator '-'
console.log(joinedNames); // Nikolay-Neykov
