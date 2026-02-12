//Vi ska använda oss consol objekt för att skicka 
// meddelanden till webbläsarens konsol. Det är ett bra sätt att se vad som händer i koden när den körs.

/* console.log("Hej på dig!", "Välkommen till JavaScript!");
console.warn("Det här är en varning!");
console.error("Det här är ett felmeddelande!");

//Vi kan också använda oss av console.table för att visa data i tabellform. Det är ett bra sätt att se data på ett överskådligt sätt.

console.log(350);
console.log(`350`);
console.log(`false`);
console.log({make: "Toyota", model: "V60"});
console.table({make: "Toyota", model: "V60"});
console.dir({make: "Toyota", model: "V60"});
 */

// Hantera variabler och värden..
// Deklarera en variabel och sätta ett värde direkt..
/* var firstName = `Najma`;
// Deklarera en variabel utan att sätta ett värde direkt..
var email;
email = null;


console.log(`FirstName:`, firstName);
console.log(`FirstName is:`, typeof firstName);
console.log(`Email:`, email); // undefined
console.log('email is:', typeof email);

firstName = 150;
console.log('FirstName:', firstName);
console.log('firstName is now:', typeof firstName);

firstName = true;
console.log('FirstName:', firstName);
console.log('firstName is now:', typeof firstName);

firstName = undefined;
console.log('FirstName:', firstName);
console.log('firstName is now:', typeof firstName); */

/* var a = `Nisse`
console.log(window);
// den tar bort variabeln a från window objektet
var a = 150; */

// Vi har 3 olika sätt att deklarera variabler på i JavaScript...
// 1.   var = variabeln och dess värde att hamna i window objektet
   // Det globala namnutrymmet...
// ANVÄNDA ALDRIG!!!

// 2.  let = deklarerar en variabel i ett block scoped område(mutable)
//      mutable = går att ändra...

// 3.   const = deklarerar en variabel i ett block scoped område(immutable)
//      immutable = går inte att ändra...


// Exempel på let...
let firstName = `Umor`;
console.log('firstName:', firstName);
firstName = `Ahmad`;
console.log('firstName:', firstName);

// Exempel på const...
const make = 1990;
console.log('make:', make);

//Gör ej
 //make = `LastYear`;
//console.log('make:', make);

// Det dycker upp ett eget scope...
    let lastName = `Abdi`;
    console.log('lastName', lastName);  

function test1() {
    let lastName = `Ahmad`;
    console.log('lastName', lastName);    
}

function test2() {
    let lastName = `Hussain`;
    console.log('lastName', lastName);    
}


test1();
test2();

lastName = `Ali`;
console.log('lastName', lastName);
console.log(window);

