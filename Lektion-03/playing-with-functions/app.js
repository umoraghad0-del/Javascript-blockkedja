/*******************************************/
// Funktioner i JavaScript
/*******************************************/

/* 
    Funktioner/Metoder är ett sätt att gruppera logik/kod
    för att kunna återanvända...

    JavaScript har 3 olika sätt att skapa/deklarera funktioner på
    1.  Function Declarations
    2.  Function Expressions
    3.  Arrow Functions
*/

// Function Declarations...
// Skapar en namngiven funktion...
function writeToLog() {
  // Här hamnar logik...
  console.log('Detta är ett meddelande ifrån funktionen writeToLog');
}

function writeToLogWithArguments(message) {
  // Här hamnar logik...
  console.log(`Här kommer ett meddelande: ${message}`);
}

writeToLog();
/* writeToLog();
writeToLog(); */

writeToLogWithArguments('Nu är det lunch...');
/* writeToLogWithArguments('Nu är det lunch...');
writeToLogWithArguments('Nu är det lunch...');
writeToLogWithArguments('Nu är det lunch...'); */

// fucnction som gör något och returnerar ett resultat...
const result = sum (5, 10);
console.log(result);

function sum (num1, num2) {
    return num1 + num2;
}
// extra exempel på en function som returnerar ett resultat...
const results = sum (5, 12);
console.log(results);

function sum (num1, num2) {
    return num1 + num2;
}

/********************************************/
// Function expressions...(anonyma funktioner)
/********************************************/

// Detta fungerar icke!!! om du försöker anropa funktionen innan den är deklarerad...
// const addedVehicle = addVehicle('Fiat');
// console.log(addedVehicle);

const addVehicle = function (manufacturer) { 
  return 'Sparar den nya bilen... ' + manufacturer;
};

const addedVehicle = addVehicle('Fiat');
console.log(addedVehicle);

// mer exempel på function expression...
const addChild = function (Hirsi) {
    return 'Sparar det nya barnet... ' + Hirsi;
}

const addedChild = addChild('Hirsi');
console.log(addedChild);

/********************************************/
// Arrow functions...
/********************************************/

const movies = [ "The Matrix", "The Lord of the Rings", "The Dark Knight" ];
console.log(movies); // detta är en array som innehåller tre strängar...

const listMovies =() => { // function expression som är en arrow function...
    return movies
}
console.log(listMovies()); // detta är en arrow function som returnerar hela arrayen...


const getMovie = (index) => movies[index];

// const getMovie = (index) => {
//   return movies[index];
// }; // samma sak som ovan fast i en mer kompakt form...

console.log(getMovie(2, 1));
