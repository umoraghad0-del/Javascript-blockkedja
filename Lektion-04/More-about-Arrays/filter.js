/***************************************************/
// Array.filter()
/***************************************************/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
// Uppgift: plocka ut alla jämna tal och presentera dem.

 // 1. via en forEach loop // gamla tradinella sätt
const evenNumbers = [];
numbers.forEach(number => {
    if (number % 2 === 0) { // om talet är delbart med 2 utan rest, så är det ett jämnt tal
        evenNumbers.push(number); // lägg till det jämna talet i evenNumbers arrayen
    }
});
console.log(`Original array:`, numbers);
console.log('Even numbers (forEach):', evenNumbers);
*/

// 2. via filter() // det nya sättet
/*
const evenNumbersFilter = numbers.filter(number => number % 2 === 0); // filter tar en funktion som argument, och returnerar en ny array med de element som uppfyller villkoret i funktionen
console.log('Even numbers (filter):', evenNumbersFilter);
*/

console.log('--- Vehicles ---');
console.log(vehicles);

// Uppgift: plocka ut alla bilar som är av märket "Volvo" och presentera dem.
const volvoCars = vehicles.filter(vehicle => vehicle.manufacturer === 'Volvo');
console.log('Volvo cars:', volvoCars);

// extra ex:- 
//const mercedes= vehicles.filter(vehicle => vehicle.manufacturer.toLocaleLowerCase() === 'mercedes');
//console.log('Mercedes cars:', mercedes);

//const interestingVehicles = vehicles.filter(vehicle => vehicle.price > 50000 && vehicle.year > 2015); // filter vehicles with price > 50000 and year > 2015
const interestingVehicles = vehicles.filter(vehicle => vehicle.modelYear > 2016); // filter vehicles with year > 2015
console.log('Interesting vehicles:', interestingVehicles);

const lowMileage = vehicles.filter((vehicle) => vehicle.mileage < 100000);
console.log(lowMileage);

const fancyCars = vehicles.filter ((vehicle) => 
    vehicle.manufacturer.toLocaleLowerCase() === 'volvo' && vehicle.modelYear > 2016 && vehicle.mileage < 100000);
console.log(fancyCars);