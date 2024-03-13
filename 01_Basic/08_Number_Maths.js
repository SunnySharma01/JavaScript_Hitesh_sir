const score = 400
 console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
const hundred = 1000000
console.log(hundreds.toLocaleString());         // US-currency
console.log(hundred.toLocaleString('en-IN'));  //indian currency

const number = 1234567.89;

// Using toLocaleString() with 'en-US' (default)
const usFormatted = number.toLocaleString();
console.log(usFormatted); // Output: 1,234,567.89 (comma as thousands separator, period as decimal separator)

// Using toLocaleString() with 'en-IN' (Indian English)
const inFormatted = number.toLocaleString('en-IN');
console.log(inFormatted); // Output: 12,34,567.89 (comma as thousands separator, period as decimal separator)




// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)




