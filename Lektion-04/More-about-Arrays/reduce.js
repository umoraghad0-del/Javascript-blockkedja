/***************************************************/
// Array.reduce()
/***************************************************/


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Enkelt exempel...
// skapa en funktion som loopar igenom listan och summerar värdena.

const calculateTotal = () => {
  let acc = 0; // accumulator (ururay:- somali), en variabel som håller reda på det totala värdet
  for (let number of numbers) {
    acc += number;
    // acc = acc + number; // acc = 0 + 1; // acc = 1 = samma sak
  }
  return acc;
};

console.log('Total:', calculateTotal());

// Ett mer modernt sätt att utföra samma sak på...
const totalValue = numbers.reduce(
  (accValue, currentValue) => accValue + currentValue,
);
console.log('Total value:', totalValue);

/* const testValue = numbers.reduce(
    (accValue, currentValue) => {
      console.log('accValue:', accValue, 'currentValue:', currentValue);
      return accValue + currentValue;
    },
); */

// Mer verktygsroget exempel...
// skapa en kundvagn som innehåller produkter, och beräkna det totala priset på produkterna i kundvagnen...

const shoppingCart = [
  { id: 1, product: 'Shirt', price: 199, quantity: 1 },
  { id: 2, product: 'Pants', price: 299, quantity: 2 },
  { id: 3, product: 'Shoes', price: 499, quantity: 1 },
];

console.log('Shopping cart:', shoppingCart);

/*const totalPrice = shoppingCart.reduce((accPrice, currentProduct) => accPrice + currentProduct.price, 0);
console.log('Total price:', totalPrice); */ // ha inte current..

const totalPrice = shoppingCart.reduce((accPrice, Product) => {
  console.log('accPrice:', accPrice, 'currentProduct:', Product);
  return accPrice + Product.price;
}, 0); // 0 är startvärdet för accPrice, så att det börjar på 0 istället för undefined...

console.log('Total price:', totalPrice);

const totalQuantity = shoppingCart.reduce((accQuantity, Product) => {
  console.log('Antal articklar:', accQuantity + Product.quantity);
  return accQuantity + Product.quantity;
}, 0);

console.log('Total quantity:', totalQuantity);
