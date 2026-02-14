// /*********************************************/
// // Array en grundläggande datatyp
// // i JavaScript (reference type)
// // En sekventiell lagring av information
// // Kan vi lagra vad som helst tillsammans i
// // en lista(array)
// /*********************************************/

// // 1. Skapa en array
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(myArray);

// // 2.
// const newArray = new Array(1,2,3,4,5,6,7,8,9);
// console.log(newArray); // jag får samma resultat som ovan

// 3. //Skapa en tom array...
// const numbers3 = [];
// console.log(numbers3); //...eller så kan jag skapa en array med en viss längd

// // Grundläggande egenskaper för arrayer...
// const length = myArray.length;
// console.log(length);

// // Arbeta med arrayer...
// // Plocka ett element ur en array...
// console.log(myArray[0]);
//  console.log(myArray[2]);
// console.log(myArray[5]);

// // Plocka det sista elementet ur en array...
// // Det gamla sättet
// console.log(myArray[myArray.length - 1]);

// // Det nya sättet... 
// // at() är en ny metod som gör det lättare att plocka element från slutet av en array
// console.log(myArray.at(-1)); // Det är en ny metod som gör det lättare att plocka element från slutet av en array
// console.log(myArray.at(-2));
// console.log(myArray.at(-3));

// // Plocka det första elementet ur en array...
// console.log(myArray[0]); // Det gamla sättet
// console.log(myArray.at(0)); // Det är en ny metod som gör det lättare att plocka element från början av en array

// // Lägga till element i en array...
// // push() är en metod som lägger till ett element i slutet av en array
// myArray.push(13);
// console.log(myArray);

// // The old way😁
// myArray[myArray.length] = 11;
// console.log(myArray);

// // Kan lagra vad som helst hur som helst
// const mixedList = [1, true, 'michael', { name: 'nisse' }];
// // Det är en array som innehåller olika datatyper
// // som en sträng, ett nummer, en boolean och ett objekt
// console.log(mixedList);

// const stringList = ['Volvo', 'Fiat', 'Kia']; // Det är en array som innehåller strängar
// console.log(stringList);
// stringList.push('Mercedes'); // lägga till..
// stringList.push('BMW');
// console.log(stringList);

// // Lagra objekt i våra arrayer...
// const vehicles = [
//   {
//     manufacturer: 'Volvo',
//     model: 'XC60',
//   },
//   {
//     manufacturer: 'BMW',
//     model: 'iX3',
//   },
//   {
//     manufacturer: 'Kia',
//     model: 'EV6',
//   },
//   {
//     manufacturer: 'Ford',
//     model: 'MACH-E',
//   },
// ];

// console.log(vehicles);

// Lägga till ett nytt objekt i vår array... 
// och det blir 5 element i vår array
// vehicles.push({
//   manufacturer: 'Volvo',
//   model: 'V40',
// });

// console.log(vehicles);

/* Manipulera arrayer */
// unshift... 
// // Det är en metod som lägger till ett element i början av en array
// const newVehicle = {
//   manufacturer: 'Mercedes',
//   model: 'S500',
// };

// vehicles.unshift(newVehicle);
// console.log(vehicles);

/* Plocka ut element/objekt ur en array... */
// Plocka ut det sista objektet/elementet...
// pop()... // Det är en metod som plockar ut det sista elementet i en array
/* const pickedLastVehicle = vehicles.pop();
console.log('Hämtat fordon', pickedLastVehicle);
console.log(vehicles); */

// Plocka ut första objektet/elementet...
// shift()...  // Det är en metod som plockar ut det första elementet i en array
/* const pickedFirstVehicle = vehicles.shift();
console.log('Hämtat första bilen', pickedFirstVehicle);
console.log(vehicles); */

// Ändra ordningen på en array
// reverse()... // Det är en metod som ändrar ordningen på en array
//console.log(vehicles.reverse());

// Sortera ordningen på en array...
// sort()...
const names = ['Zebra', 'Känguru', 'Lejon', 'Apa'];
console.log(names.sort()); // Det är en metod som sorterar ordningen på en array

names.push('Giraff');
names.push('Elefant');
console.log(names);

names.sort();
console.log(names); 

names.pop();
console.log(names); // Det är en metod som plockar ut det sista elementet i en array

names.unshift('Giraff');
console.log(names); // Det är en metod som lägger till ett element i början av en array

names.shift();
console.log(names); // Det är en metod som plockar ut det första elementet i en array

// Kontrollera om ett element existerar i en lista...
// includes()...
const exists = names.includes('Lejon');
console.log(exists);

// Plocka ut indexet för ett element i en array...
// indexOf()...
const index = names.indexOf('Elefant');
console.log(index);
console.log(names[index]);

// Skapa nya arrayer av befintliga arrayer...
// slice()... //
const newAnimals = names.slice(1, 4);
console.log('newAnimals', newAnimals);
console.log('names', names);

// Ta bort ett element ur listan via en position...
const deletedAnimals = names.splice(0, 2);
console.log('deletedAnimals', deletedAnimals);
console.log('Animals', names);