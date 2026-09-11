let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth, minutesInMonth);

let health = 100;
let energy = 80;
health -= 20;
energy -= 15;
console.log(health, energy);

const totalPrice = 500;
const discount = 0.1;
const discountedPrice = totalPrice * (1 - discount);
console.log(discountedPrice);

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

const floatString = "45.67";
const parsedFloat = Number.parseFloat(floatString);
console.log(parsedFloat);

const intString = "123";
const parsedInt = Number.parseInt(intString, 10);
console.log(parsedInt);

let number = 16;
const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

const integer = 42;
const stringNumber = "256";
const convertedInt = Number.parseInt(stringNumber, 10);
console.log(convertedInt);
const convertedString = integer.toString();
console.log(convertedString);