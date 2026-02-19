// Hämta in refenser till dom element högst upp i javascript filen
// endast en gång..

const form = document.querySelector('form');
const input = document.querySelector('#item-input');
//documet.getElementById('item-input'); // alternativt sätt att hämta elementet
const groceryList = document.querySelector('.items');


const initApp = () => {
    //console.log('Applikationen har startats')
    };

    const handleAddGrocery = (event) => {
        event.preventDefault();
        //console.log('Lägg till en vara i listan');
        const grocery = input.value;

        if (grocery.length > 0) {
        //console.log(`Att köpa`, grocery);

//   // Skapa ett element med texten ifrån input.value
    // och placera i listan...
        const li= document.createElement('li');
        li.textContent = grocery;
          // Lägger till vår ny listitem element till listan(<ul>)
        groceryList.appendChild(li);
        input.value = '';
    }
};

document.addEventListener('DOMContentLoaded', initApp);
form.addEventListener(`submit`, handleAddGrocery);