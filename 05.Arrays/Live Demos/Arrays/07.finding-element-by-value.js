const names = ['Bobi', 'Skorchev', 'Geri', 'Bobi', 'Alexandra', 'Bobi', 'Nikolay'];

const doesBobiExist = names.includes('Bobi'); // checks if given value exists in the array
console.log(doesBobiExist); // true

const firstIndexOfBobi = names.indexOf('Bobi'); // returns the index of a certain value in the array (if not found returns -1)
console.log(firstIndexOfBobi); // 0
