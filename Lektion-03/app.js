/***************************************************/
// Introduktion till Dom
/***************************************************/
// Det globala objektet, högts i i hierarkin
// Window
// console.log(window);
// window.alert('Hej på dig!');
// alert('Hej på dig!');

// Document objektet
//console.log(document);

// root elementet
//console.log(document.documentElement);

// body elementet
//console.log(document.head);

// html collection
// console.log(document.head.children);
// console.log(document.head.children [3]);
// console.log(document.head.children[3].innerHTML);

// document.head.children[3].innerHTML = "Intro till Dom";

// // hämta alla länkar
//console.log(document.links);
// console.log(document.links[0].innerHTML);
// console.log(document.links[0].href);

// Icke rekommenderat sätt att manipulera länkar eller attribut på!!!
// document.links[0].href = 'https://react.dev/';
// console.log(document.links[0].href);

// FARLIGT ATT GÖRA...
// document.body.innerHTML =
//   '<h2>JavaScript är helball! 🎉</h2><button>Byt allt!</button>';

//console.log(document.all);

//console.log(document.links);

// Försök 1.
//document.links.forEach((x) => console.log(x));

//Försök 1.5
//Array.from() // Skapar en array från en array-liknande objekt, i det här fallet document.links
//const links = Array.from(document.links);
//console.log(linksArray);
//console.log ('Array.from()',links);
//links.forEach((x) => console.log(x));


// Försök 2.
//for (let i = 0; i < document.links.length; i++) {
 //console.log(document.links[i]);
//}

// Försök 3.
// for (let link of document.links) {
//  console.log(link);
// }

/***************************************************/
// Lokalisera html element i DOM

// 3 huvudsakliga sätt att lokalisera eller hitta element
// 1. Via elements namn t ex h1
// 2. Via elementets id
// 3. Via elementets klass (css)
/***************************************************/

// Det gamla sättet som jag undviker...
const title = document.getElementById('page-title');
console.log(title);
title.innerHTML = 'Intro till DOM';

// Det nya sättet att hitta element via css selektorer
const title2 = document.querySelector('h1');
console.log(title2);
title2.innerHTML = 'Intro till DOM Amazing!';
title2.style.color = 'blue';
title2.style.fontFamily = 'Arial, sans-serif';
title2.style.backgroundColor = 'lightgray';
title2.style.border = '10px solid blue';
title2.style.padding = '20px';

title2.classList.add // Lägg till en klass
title2.classList.remove // Ta bort en klass
title2.classList.toggle // Växla en klass (om den finns ta bort den, om den inte finns lägg till den)

const links = document.querySelectorAll('.link'); // Hämta alla element som har klassen "link"
console.log(links);
links.forEach((link) => {
  console.log(link);
  link.style.color = 'red';
  link.style.textDecoration = 'none';
  link.style.fontWeight = 600;
  link.style.display = 'inline-block';
  link.style.marginBottom = '1.2rem';
});

/* Addera information dynamiskt */
const vehicles = ['Ford', 'Fiat', 'BMW', 'Volvo'];
const detailsPlaceHolder = document.querySelector('#details'); // Hämta elementet med id "details"

for (let vehicle of vehicles) {
  let div = document.createElement('div'); // Skapa ett nytt div element
  div.textContent = vehicle; // Sätt textinnehållet i div elementet till namnet på bilen

  detailsPlaceHolder.appendChild(div); // Lägg till det nya div elementet som ett barn till detailsPlaceHolder elementet
}