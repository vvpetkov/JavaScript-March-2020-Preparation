const seyHello = () => {
    console.log('Hello ');
};

seyHello(); // Hello

const seyHello02 = (name) => {
    // name е параметър
    console.log(name);
};

seyHello02(); // undefined
seyHello02('Vlado'); // Vlado  // 'Vlado' Е АРГУМЕНТ

const printFullName = (firstName, lastName, born) => {
    console.log(firstName, lastName, `Born: ${born}`);
};

printFullName('Vlad', 'Dracula', 1430);

const getFullName = (firstName, lastName, born) => {
    return `${firstName} ${lastName}`;
};

const fullName = getFullName('Vlad', 'Dracula', 1430);

console.log(fullName);

const calculate = (numA, numB, operation) => {
    return operation(numA, numB);
};

const operationTwoNumbers = (a, b) => {
    return a + b;
}; //* или sugar :
//* const operationTwoNumbers = (a, b) => a + b;

//console.log(`operationTwoNumbers = ${operationTwoNumbers(2, 3)}`);  // 5

const sum = calculate(2, 3, operationTwoNumbers);

console.log(sum); // 5
