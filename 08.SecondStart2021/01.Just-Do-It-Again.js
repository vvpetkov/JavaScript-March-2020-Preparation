console.log("Vladimir Petkov");

/*
Multi-line Comments
*/
// Single Line Comments

let firstName = "Vladimir";
let lastName = "Pekov";
let age = 42;
age += 1; //(age = age + 1)
age /= 2;
age = Math.floor(age);

console.log("First name: " + firstName);
console.log("Last name: " + lastName);
console.log("Age:" + age);

/*
5/2 = 2,5=2 ½ остатъка е 1 (взимаме горното от дробното число)
5 % 2 = 1
*/

let num = 8;
let remainder = num % 4;
console.log(remainder);

let foo; // undefined  имаме променлива но няма стойност (без изрично да казваме) (имплицитно) (липса на стойност щото не сме сложили)
let bar = null; // null имаме конкретно (изрично казваме) (експлицитно) нищо (липса на стойност щото сме казали няма стойност )

console.log(foo);
console.log(bar);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let b = 2;
let c = 3;

console.log(b + c);

let sum = b + c;

console.log(sum);

let stamat = "Stamat";
let evlogi = "Evlogi";

console.log(stamat + " " + evlogi);
console.log(`${stamat} ${evlogi}`);

let serafim = "serafim";
console.log(serafim);
console.log(serafim.toUpperCase());
console.log(serafim.length);

serafim = serafim.toUpperCase();
console.log(serafim);
console.log("5" + 5 + 5);

let a = "a";
console.log(a.charCodeAt(0));

let chartCode97 = "97";
console.log(String.fromCharCode(chartCode97, 98, 99, 100));

let isTrue = true;
let isFalse = false;

console.log(isTrue);
console.log(isFalse);
console.log(isTrue && isFalse);

let num02 = 0;
console.log(++num02); // префикс събери, после покажи
console.log(num02++); // покажи, после събери
console.log(num02);

let yavor = 2 < 3;
console.log(yavor);

let numAsString = "5";
let numAsNumber = Number(numAsString);
console.log(numAsNumber + 5);

// тернарен ? expr1 : expr2

let faxNumber = "";
faxNumber = faxNumber === "" ? "(no fax)" : faxNumber;

console.log(faxNumber);

// Conditionals

// === не само по стойност, но и по тип данни ===, !==

let x = 2 * 4;
let y = 16 / 2;
console.log(x === y); // true
console.log(x === ++y); // false

const str1 = "la mostra";
const str2 = "La mostra";
str1 === str2; // true
str2 === str2.toLowerCase(); // true

// Operators that perform logical operation with boolean operands
// && - check if both sides are true
// || - checks if one of the sides is true
// (!) - flips true to false and false to true

// По добри коментари с 4 цвята
// * - Подчертава
// TODO: Списък
// ? Пита
// ! Внимание
// По добри коментари

const logicalAnd = true && true && true && true;
const logicalAnd01 = true && true && false && true;
// При първият false, другите проверки не се правят
console.log(logicalAnd); // true
console.log(logicalAnd01); // false

const logicalOr = true || true || true;
console.log(logicalOr); // true

const logicalOr02 = true || false || true;
console.log(logicalOr02); // true
// едно да е грешно , всичко е грешно
// едно да е вярно, всичко е вярно
// проверява само едната страна дали е вярна

const logicalOr03 = true || false || false;
console.log(logicalOr03); // false

const bug = !(true && true); // false
// знакът ! обръща (сметнатият резултат)

// teen is between 13 and 19
let age01 = 23;
let olderthan12 = age01 > 12;
let youngerThan20 = age01 < 20;

let isTeen = olderthan12 && youngerThan20;

console.log(`The person who is ${age01} years old is a teenager: ${isTeen}`);
// The person who is 23 years old is a teenager: false

let isRetired = age > 65;
let isNotInWorkingAge = isTeen || isRetired || age < 13;
console.log(`This person should not work: ${isNotInWorkingAge}`);
// This person should not work: false

let condition = true;
if (condition) {
  // кода ще се изпълни
  // само когато (condition) е вярно
  // иначе ще го пропусне
}

let isDay = true;
isDay = false; //* динамично го променям // нищо няма да принтира ще пропусне {bloc of code}
isDay = true; //* динамично го променям // I`m in

if (isDay) {
  console.log("It is a day!");
}
// I`m in

let isDay02 = false;
if (isDay02) {
  console.log("It is a day!!");
} else {
  console.log("It is night!!");
}
// It is Night!! //* Ако е грешно ще изпълни 2рият блок код

const hour = 8;

if (hour >= 6 && hour <= 10) {
  console.log("Good Morning!");
} else if (hour > 10 && hour < 20) {
  console.log("Good day!");
} else if (hour >= 200 && hour < 23) {
  console.log("Good evening!");
} else {
  console.log("Wrong number?");
}

let name01 = "ivan4";

switch (name01) {
  case "ivan":
    console.log("This is Ivan");
    break;
  case "stavri":
    console.log("This is Stavri");
    break;
  default:
    console.log("I do not know who are you!");
    break;
}

console.log(zzz);
var zzz = 5;
console.log(zzz);

if (true) {
  const bloc = 7;
  console.log("first if");
  console.log(bloc);

  if (true) {
    console.log(bloc);
  }
}

if (true) {
  console.log("second if");
  //console.log(bloc)
}

let bl011 = "ап. 18";

if (true) {
  console.log(bl011);
  if (true) {
    bl011 = "aп. 03";
    console.log(bl011);
    if (true) {
      console.log(bl011);
    }
  }
}
