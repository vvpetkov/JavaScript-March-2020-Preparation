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

printFullName('Vlad', 'Drakula', 1430);

const getFullName = (firstName, lastName, born) => {
    return `${firstName} ${lastName}`;
};

const fullName = getFullName('Vlad', 'Drakula', 1430);

console.log(fullName);
