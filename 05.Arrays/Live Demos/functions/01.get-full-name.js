const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

// const getFullName = (firstName, lastName) => `${firstName} ${lastName}`; // we can skip the return

const myFirstName = 'Nikolay';
const myLastName = 'Neykov';
const fullName = getFullName(myFirstName, myLastName);
console.log(fullName); // Nikolay Neykov

const anotherFirstName = 'Ivan';
const anotherLastName = 'Ivanov';
const anotherFullName = getFullName(anotherFirstName, anotherLastName);
console.log(anotherFullName); // Ivan Ivanov
