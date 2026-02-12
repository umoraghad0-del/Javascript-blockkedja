/* 
    OPERATORS IN JAVASCRIPT...
    +, -, *, /, %, <, >, >=, =<, !, =, ==, ===, !=,!==, &&, ||
    // används oftas järmföralse (järmföra operatorer...)
     <, >, >=, =<, !, =, ==, ===, !=,!==, &&, ||
*/

// Fem variabler (data bärare)...
const firstName = 'Najma';
const lastName = 'Hasan';
const addressLine = 'Gatan 1';
const postalCode = '44444';
const city = 'Göteborg';

// variabeln som innehåller för och efternamn...
 console.log(firstName, lastName)

// + tecknet kan användas till att slå samman olika strängar
// till en sträng... (samma svar) men undvika att använda + tecknet för att slå samman strängar...
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// detsamma här
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const personInfo =
  'Mitt namn är ' +
  firstName +
  ' ' +
  lastName +
  ' Jag bor på adress ' +
  addressLine +
  ' ' +
  postalCode +
  ' ' +
  city;

console.log(personInfo);

// Använd istället string template...
// som använder sig av string interpolation...
const info = `Mitt namn är ${firstName} ${lastName} Jag bor på adress ${addressLine} ${postalCode} ${city}`;

console.log(info);

// Matematiska operatorer...
const currentYear = 2026;
console.log(currentYear, typeof currentYear);

const birthYear = 1990;
const age = currentYear - birthYear;
console.log(age);
console.log(currentYear - birthYear);

let x = 10 * 2;
console.log(x);

x = 10 * 2 + 5;
console.log(x);

x = 10 * (2 + 5);
console.log(x);

x = (10 * 2) / 5;
console.log(x);

// modulus %...
let a = 25;
console.log(a / 5);
console.log(a / 3);
console.log(a / 2);
console.log(a % 3);
console.log(a % 2);