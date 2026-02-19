/*****************************************************/
// Iterera i listor (loopar)
// JavaScript har 3 huvudsakliga varianter på
// iterationer
// 1. for i loopen
// 2. for of loopen
// 3. forEach loopen(finns i två varianter)
/*****************************************************/

/*
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. for i loopen
console.log('------- for i loopen -----------');
for (let i = 0; i < myArray.length; i++) { // i är en variabel som börjar på 0, och ökar med 1 varje varv, så länge i är mindre än längden på arrayen
    console.log(myArray[i]);
}

console.log('------- backwards 1 -----------');
for( let i = myArray.length - 1; i >= 0; i--) { // i börjar på sista indexet, och minskar med 1 varje varv, så länge i är större än eller lika med 0
    console.log(myArray[i]);
}

console.log('------- backwards 2 -----------');
for( let i = myArray.at(-2); i >= 0; i--) { // i börjar på näst sista indexet, och minskar med 1 varje varv, så länge i är större än eller lika med 0
    console.log(myArray[i]);
}

// 2. for of loopen
console.log('------- for of loopen -----------');
for (let element of myArray) { // element är en variabel som tar värdet av varje element i arrayen, en i taget
    console.log(element);
}

// 3. forEach loopen (finns i två varianter)
// forEach måste ha en funktion som utför arbetet
// som ska göras i loopen...

// forEach varianten 1
console.log('------- forEach loopen -----------');
myArray.forEach(function(number,index) {
    //console.log(number, index);
    console.log(number);
});

// forEach varianten 2 (med arrow function)
console.log('------- forEach loopen (arrow function) -----------');
myArray.forEach((number, index) => {
    //console.log(number, index);
    console.log(number);
});
*/

console.log('Playing with vehicles...');
/*
for (let i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i].manufacturer); // skriver ut tillverkaren av varje fordon
  console.log(vehicles[i].model); // skriver ut modellen av varje fordon
  //console.log(vehicles[i]);
}
*/

for (let vehicle of vehicles) {
  console.log(vehicle.manufacturer, vehicle.model); // skriver ut tillverkaren och modellen av varje fordon
  //console.log(vehicle);
}

vehicles.forEach((vehicle) => {
  console.log(vehicle.manufacturer, vehicle.model); // skriver ut tillverkaren och modellen av varje fordon
  //console.log(vehicle);
});

// vehicles.forEach((vehicle, index) => {
//   console.log(vehicle.manufacturer, vehicle.model, 'index:', index);
// }); // forEach varianten 2 (med index)
