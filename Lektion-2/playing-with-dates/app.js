//console.log('Playing with Dates');

/* Skapa ett datumobjekt... */
//const date = new Date(); // Skapar ett datumobjekt som representerar det aktuella datumet och tiden
//console.log(date);

 //console.log(new Date()); // Skapar ett nytt datumobjekt som representerar det aktuella datumet och tiden
 
// let birthDate = new Date('1990-12-15');
// console.log('Birthdate', birthDate);

/* Skapa ett datumobjekt med specifika datum och tid... */
// birthDate = new Date('1990-12-15 22:01:48'); // Skapar ett datumobjekt som representerar den 15 december 1990 kl 22:01:48
// console.log('Birthdate', birthDate);

// birthDate = new Date('november 13 1990 22:02:15'); // Skapar ett datumobjekt som representerar den 13 november 1990 kl 22:02:15
// console.log('Birthdate', birthDate);

// birthDate = new Date(1990, 0, 17); // Skapar ett datumobjekt som representerar den 17 januari 1990 (månaderna är nollindexerade, så 0 = januari) utan string, det är därför det inte är lika tydligt som de tidigare exemplen
// console.log('Birthdate', birthDate);

// birthDate = new Date(1990, 0, 17, 21, 35, 12, 0, 0); // Skapar ett datumobjekt som representerar den 17 januari 1990 kl 21:35:12 (månaderna är nollindexerade, så 0 = januari) utan string, det är därför det inte är lika tydligt som de tidigare exemplen
// console.log('Birthdate', birthDate);

/* Hämta ut olika delar av datumet... */
const date = new Date();
console.log('Datum', date);
console.log('År', date.getFullYear());
console.log('Månad', date.getMonth()); // Månaderna är nollindexerade, så 0 = januari, 1 = februari, ..., 11 = december
console.log('Datum', date.getDate());
console.log('Veckodag', date.getDay()); // Veckodagarna är nollindexerade, så 0 = söndag, 1 = måndag, ..., 6 = lördag
console.log('Timmar', date.getHours());

/* Arbeta med Date datatypen... */
let currentDate = new Date();
console.log('Aktuell datum och tid', currentDate);
console.log('Aktuell datum och tid', Date.now());
console.log('Aktuell datum och tid', Date.parse('2024-12-01'));

// Timezone hantering...
console.log('Timezone offset', currentDate.getTimezoneOffset());

// Ett mer verkligt exempel...
// Skapa ett förfallodatum på en faktura
let invoiceDate = new Date('2026-02-04');
console.log('Invoice Date', invoiceDate); // Fakturadatum

// Lägg till 20 dagar för att få fram förfallodatumet
let dueDate = new Date();
dueDate.setDate(invoiceDate.getDate() + 20); // Sätter förfallodatumet till fakturadatumet plus 20 dagar
console.log('Due date', dueDate);

/* 
    För att slippa krångel med JavaScripts inbyggda datumhantering
    använd moment.js...
*/