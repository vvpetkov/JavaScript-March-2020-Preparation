// console.log(name); // ReferenceError: Cannot access 'name' before initialization

const name = 'Georgi';

if (true) {
  console.log(name);
  if (true) {
    // const name = 'Georgi is shadowed'; // Shadowing !!! DON'T DO IT !!!
    console.log(name);
    if (true) {
      console.log(name);
      const hidden = 'Cannot be accessed from another block';
      console.log(hidden);
    }

    if (true) {
      console.log(name);
      // console.log(hidden);  // ReferenceError: hidden is not defined
    }
  }
}
