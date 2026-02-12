/* Arbeta med numeriska värden i JavaScript */

// Egenskaper...
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

//Testa om värdet är ett heltal...
// console.log(Number.isInteger(2.543786));
// console.log(Number.isInteger(2));
// console.log(Number.isInteger(67.7));

// Tolka/omvandla en sträng till numeriskt värde...
//const value = '2.56789';
// let value = '2.56789';
// console.log('Värdet = ', value);
// console.log(Number.parseFloat(value));
// console.log(Number.parseInt(value));
// value = '2020'; // Det här fungerar...
// value = '2020.56789'; // Det här fungerar också...
// value = 'Kale Ankna'; // Det här fungerar inte, det blir NaN (Not a Number)...
// console.log(Number.parseFloat(value));
// console.log(Number.parseInt(value));

/* Hantera/styra antalet decimaler */
// const amount = '19.94561234';
// console.log(parseFloat(amount));
// console.log(parseFloat(amount).toFixed(2));
// console.log(parseFloat(amount).toFixed(4));
// console.log(parseFloat(amount).toFixed(1));

/* Omvandling till korrekt locale */
// const payment = 2500000.75;
// console.log(payment.toString());
// console.log(payment.toLocaleString());
// console.log(payment.toLocaleString('sv-SE'));
// console.log(payment.toLocaleString('en-US'));
// console.log(payment.toLocaleString('fr-FR'));

/* Räkna ut kvadratroten av ett tal... */
// const value = 25;
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(0.25));

/* Matamatiska funktioner... */
// console.log(Math.round(2.56789));
// console.log(Math.round(2.543786));
// console.log(Math.round(2.5));
// console.log(Math.round(2.4));

//const number = 1.5236897;
// Math...
// console.log(Math.ceil(number)); // Avrundar uppåt till närmaste heltal
// console.log(Math.floor(number)); // Avrundar nedåt till närmaste heltal
// console.log(Math.round(number)); // Avrundar till närmaste heltal
// console.log(Math.trunc(number)); // Tar bort decimaldelen och behåller heltalsdelen

// Räkna ut antalet timmar och minuter baserat på en tidslängd t ex 79
//const movieLength = 211;
// const movieLength = 79;
// const hours = Math.floor(movieLength / 60);
// const minutes = movieLength % 60;
// console.log(`Antal timmar: ${hours} tim och ${minutes} min`);

/* Generera slumptal... */
// Math.random();
let rnd = Math.random(); 
console.log('Random 1', rnd);  // Genererar ett slumptal mellan 0 (inklusive) och 1 (exklusive)

rnd = Math.random();
console.log('Random 1.1', rnd); // Genererar ett nytt slumptal mellan 0 (inklusive) och 1 (exklusive)

rnd = Math.floor(Math.random() * 5); // Genererar ett slumptal mellan 0 och 4 (inklusive)
console.log('Random 2', rnd);

rnd = Math.floor(Math.random() * 100); // Genererar ett slumptal mellan 0 och 99 (inklusive)
console.log('Random 2.2', rnd);

rnd = Math.floor(Math.random() * 100) + 1; // Genererar ett slumptal mellan 1 och 100 (inklusive)
console.log('Random 2.3', rnd);

const min = Math.ceil(10000);
const max = Math.floor(200000);
console.log('Min:', min, 'Max:', max); // Min: 10000 Max: 200000

rnd = Math.floor(Math.random() * (max - min) + min); // Genererar ett slumptal mellan 10000 (inklusive) och 200000 (exklusive)
console.log('Random 3', rnd);




