//console.log("Det funkar!");

// --- 1. String concatenation ---
/* String templates och string interpolation */
// const firstName = 'Michael';
// const lastName = 'Gustavsson';

// const fullName = `Mitt namn är ${firstName} ${lastName}`;
// console.log(fullName);

/* Egenskaper på strängar */
const vehicle = 'Volvo V40 2017';
console.log(vehicle);
console.log(vehicle.length);

/* Manipulera strängar */
// console.log(vehicle[0]);
// console.log(vehicle[1]);
// console.log(vehicle[2]);
// console.log(vehicle[6]);


// Det gamla sättet att hämta sista tecknet(elementet)
// const index = vehicle.length - 1;
// console.log(vehicle[index]);
// console.log(vehicle[vehicle.length - 1]);

/* Använda metoder för att manipuler och arbeta med strängar... */
// Det nya mer moderna sättet...
// metoden AT...
// console.log(vehicle.at(0));
// console.log(vehicle.at(-1));
// console.log(vehicle.at(-1));
// console.log(vehicle.at(7));

// Hämta ut tecken med hjälp av dess position...
// console.log(vehicle.charAt(0));
// console.log(vehicle.charAt(2));

// Detta fungerar inte ❗️
// console.log(vehicle.charAt(-1));

/* Hämta ut flera tecken ur en sträng... */
// console.log(vehicle.slice(0, 5));
// console.log(vehicle.slice(6, 9));

/* Kontrollera om en sträng börjar eller slutar med en sekvens av tecken */
// console.log(vehicle.startsWith('V'));
// console.log(vehicle.startsWith('Volvo'));
// console.log(vehicle.startsWith('Volvo V'));
// console.log(vehicle.startsWith('V40'));

// console.log(vehicle.endsWith('7'));
// console.log(vehicle.endsWith('2017'));
// console.log(vehicle.endsWith('V40'));

/* Göra om en sträng till att bara ha stora eller små bokstäver... */
// console.log(vehicle.toUpperCase());
// console.log(vehicle.toLowerCase());

/* Ersätta tecken med andra tecken */
// const personAddress = 'Strandvägen 1 444 44 Stenungsund';
// console.log(personAddress.replace(' ', '-'));
// console.log(personAddress.replaceAll(' ', '%'));
// console.log(personAddress, personAddress.replaceAll(' ', '%'), personAddress);

/* Rensa bort mellanslag för eller efter sträng */
// const personAddress = ' X' + 'Strandvägen 1 444 44 Stenungsund' + 'X ';
// console.log(personAddress);
// console.log(personAddress.trim());
// console.log(personAddress.trimStart());
// console.log(personAddress.trimEnd());
// console.log(personAddress.replaceAll(' ', ''));

/* Sök i strängar */
// const personAddress = 'Strandvägen 1 444 44 Stenungsund';

// console.log(personAddress.includes('vägen 1'));
// console.log(personAddress.includes('vägen 2'));
// console.log(personAddress.includes('44'));

const title = 'Javascript är fantastiskt!';
console.log(title);
// Reguljära uttryck...
const regex = /javascript/i; // i flaggan gör att det inte spelar någon roll om det är stora eller små bokstäver
console.log(title.replace(regex, 'React'));

/* Repetera ord eller bokstäver... */
const test = 'snabb';
console.log(test, test.repeat(10));



