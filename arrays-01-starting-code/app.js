// // // // #1 Creating Array
// // // const numbers = [1, 2, 3];
// // // console.log(numbers);

// // // // // const moreNumbers = new Array(5, 2);
// // // // const moreNumbers = Array(5, 2);
// // // // console.log(moreNumbers);

// // // // const yetMoreNumbers = Array.of(1, 2);
// // // // console.log(yetMoreNumbers);

// // // const listItems = document.querySelectorAll('li');
// // // console.log(listItems);

// // // const arrayListItems = Array.from(listItems);
// // // console.log(arrayListItems);

// // // // #2 Data in Array
// // // const hobbies = ['Cooking', 'Sports']; // Simple Array
// // // const personData = [30, 'Max', { moreDetails: [] }]; // Mixed Types

// // // const analyticsData = [
// // //   [1, 1.6],
// // //   [-5.4, 2.1],
// // // ]; // array in Array Or Multi-dimensional

// // // for (const data of analyticsData) {
// // //   // nested Arrays
// // //   for (const dataPoint of data) {
// // //     console.log(dataPoint);
// // //   }
// // // }

// // // console.log(personData[1]); // Indexing personData

// // // Adding & Removing Elements--
// // const hobbies = ['Sports', 'Cooking']; // An Array
// // hobbies.push('Reading'); // Adding a Element from behind
// // hobbies.unshift('Coding'); // Adding a Element from front
// // const poppedValue = hobbies.pop(); // Removing a Element & Storing The Value
// // hobbies.shift(); // Removing a Element from front
// // console.log(hobbies);

// // hobbies[1] = 'Coding'; // Shorthand for Add or Replace
// // // hobbies[5] = 'Reading'; // rarely used
// // console.log(hobbies, hobbies[4]);

// // // Splice Method()--
// // // hobbies.splice(0, 0, 'Good Food'); // Adding a Element Within
// // // console.log(hobbies);

// // hobbies.splice(1, 0, 'Good Food'); // Adding a Element Within index[1]
// // console.log(hobbies);

// // // hobbies.splice(0, 1, 'Good Food'); // Removing a Element Within index[1]
// // // console.log(hobbies);

// // // hobbies.splice(0); // Removing whole array
// // // console.log(hobbies);

// // const removeElements = hobbies.splice(-1, 1); // Storing Removed Element
// // console.log(hobbies);

// // slice Method()--
// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(0, 2); // Start & End
// // const storedResults = testResults.slice(-3, -1); // -N S & -N E
// // const storedResults = testResults.slice(2); // Start to End
// const storedResults = testResults.concat([3.99, 2]); // array combine within exist arrays

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5)); // From front
// // console.log(testResults.lastIndexOf(1.5)); // From last

// console.log(testResults.includes(10.99)); // include method--
// console.log(testResults.indexOf(10.99) !== -1); // (Same as include method)

// const personData = [{ name: 'Max' }, { name: 'Manuel' }]; // Can't work Objects
// console.log(personData.indexOf({ name: 'Manuel' }));

// // find() and findIndex()--
// const manuel = personData.find((person, idx, persons) => {
//   // find
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   // findIndex
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// Alternative for() method--
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// Simple for() loop--
// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// forEach() method--
prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);
