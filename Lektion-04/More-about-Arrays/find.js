/***************************************************/
// Array.find()
/***************************************************/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array.find() tar ett argument (predicate) == funktion...
// Om find() returnerar ett resultat om det finns något...

// 1. gamla sättet
/*
const found = numbers.find(function (number) {
  return number === 8;
});
console.log(found);

// 2. nya sättet (snyggare)

const foundArrow = numbers.find((number) => number === 8);
console.log(foundArrow);
*/

console.log('--- Vehicles ---');
console.log(vehicles);

const vehicle= vehicles.find ((vehicle) => vehicle.id === 3);
console.log('Vehicle with id 3:', vehicle);

const regVehicle = vehicles.find((vehicle) => vehicle.registrationNumber === 'ABC123');
console.log('Vehicle with registration number ABC123:', regVehicle);