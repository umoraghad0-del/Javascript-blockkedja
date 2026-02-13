/******************************************************/
// Villkorshantering
/******************************************************/

// Truthy respektive Falsy...
/* 
    Truthy(sanna uttryck)
    skiljt ifrån 0
    'Michael'
    {}

    Falsy(ej sant)
    0
    ''
    undefined
    null
    NaN
*/

// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(-1)); // true

// console.log(Boolean("")); // false
// console.log(Boolean(" ")); // true
// console.log(Boolean("0")); // true
// console.log(Boolean("Najma")); // true

// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false

/* if och else */
// if(){}else{} 

// Setup variables and object... 
const maxCarAge = 5; // år
const maxMileage = 10000; // mil

const car = {
  manufacturer: 'Fiat',
  model: 'Uno',
  mileage: 10000,
  modelYear: 2022, // om vi ändrar till 2010 så kommer bilen att vara för gammal...
};

//const currentYear = new Date();
const currentYear = new Date().getFullYear();
//console.log("currentYear:", currentYear);
const carAge = currentYear - car.modelYear;
//console.log("carAge:", carAge);

// if(villkor){kodblock} else {kodblock}
if (carAge < maxCarAge) {
  console.log('Bilen är intressant för oss...');
  //console.log('Andra kodraden');
} else {
  console.log('Bilen är för gammal för oss...');
}

// detta är också okey att ha men inte rekommenderat...
// if (carAge < maxCarAge) 
//   console.log('Bilen är intressant för oss...');
//   //console.log('Andra kodraden');
//  else 
//   console.log('Bilen är för gammal för oss...');


// One-liners, var försiktiga...
if (carAge < maxCarAge) console.log('Bilen är intressant');

// En mer korrekt one-liner med else...
const result =
  carAge < maxCarAge ? 'Bilen är intressant' : 'Bilen är inte intressant';

console.log(result);

// if else if else...
const day = 'Tisdag'; // ändra till 'Lördag' så kommer den att hamna i else delen, ändra till lördag så kommer den att hamna i default delen...

// if (day == 'Måndag') {
//   console.log('Veckans jobbigaste dag, hoppas den går fort');
// } else if (day == 'Tisdag') {
//   console.log('Fortfarande jobbigt');
// } else if (day == 'Onsdag') {
//   console.log('Lille lördag, det börjar arta sig!');
// } else if (day == 'Torsdag') {
//   console.log('Snart helg.');
// } else if (day == 'Fredag') {
//   console.log('Nu tar vi helg');
// } else {
//   console.log('Nu vet jag inte vilken dag det är, hjälp!!!');
// }

// switch case... trevligare att läsa när det är många olika alternativ...
// switch (day) {
//   case 'Måndag':
//     console.log('Veckans jobbigaste dag, hoppas den går fort');
//     break;
//   case 'Tisdag':
//     console.log('Fortfarande jobbigt');
//     break;
//   case 'Onsdag':
//     console.log('Lille lördag, det börjar arta sig!');
//     break; // Om man inte har break så kommer den att fortsätta att köra nästa case, så kallad "fall through", det kan vara användbart i vissa situation
//   case 'Torsdag':
//     console.log('Snart helg.');
//     break;
//   case 'Fredag':
//     console.log('Nu tar vi helg');
//     break;
//   case 'Lördag':
//     console.log('Nu är det lördag');
//     break;
//   default: // default är det som körs om ingen av de andra cases matchar, det är som else i if else if... 
//   // // jag vet inte vad det är för dag längre...
//     console.log('Nu vet jag inte vilken dag det är, hjälp!!!');
//}

// logiska operatorer || eller && och

// om carage är mindre än maxCarAge ELLER antal körda mil är lägre än
// maxmil som vi är intresserade
if (car.mileage <= maxMileage || carAge <= maxCarAge) { 
    // om carage är mindre än maxCarAge ELLER antal körda mil är lägre än maxmil som vi är intresserade
  console.log('ELLER villkor: Bilen är intressant');
}

if (car.mileage < maxMileage && carAge < maxCarAge) { 
    // om carage är mindre än maxCarAge OCH antal körda mil är lägre än maxmil som vi är intresserade
  console.log('OCH villkor: Bilen är intressant');
}

console.log('*****************************');

// skillnaden mellan =, == och ===... Example till mig själv...

// = är en tilldelningsoperator, den används för att tilldela ett värde till en variabel...
let x = 5; // x får värdet 5
console.log(x);

// == är en jämförelseoperator som jämför värden, den gör en så kallad "loose comparison", den försöker att konvertera värdena till samma typ innan den jämför dem...
console.log(10 == '10'); // true, eftersom den konverterar strängen '10' till talet 10 innan den jämför dem...

// === är en jämförelseoperator som jämför både värde och typ, den gör en så kallad "strict comparison", den jämför värdena utan att konvertera dem...
console.log(10 === '10'); // false, eftersom de är av olika typer...


// Loose vs strict comparison...
const number = '10';
console.log(number);

// loose comparison...
if (number == 10) {
  console.log('Number är lika med ', number);
}

// strict comparison!!!!!
if (number === 10) {
  console.log('Number är lika med ', number);
} else {
  console.log('Number är inte lika med ', number);
}