// // #1 Creating Array
// const numbers = [1, 2, 3];
// console.log(numbers);

// // // const moreNumbers = new Array(5, 2);
// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// // #2 Data in Array
// const hobbies = ['Cooking', 'Sports']; // Simple Array
// const personalData = [30, 'Max', { moreDetails: [] }]; // Mixed Types

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ]; // array in Array Or Multi-dimensional

// for (const data of analyticsData) {
//   // nested Arrays
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]); // Indexing personalData

// Adding & Removing Elements--
const hobbies = ['Sports', 'Cooking']; // An Array
hobbies.push('Reading'); // Adding a Element from behind
hobbies.unshift('Coding'); // Adding a Element from front
const poppedValue = hobbies.pop(); // Removing a Element & Storing The Value
hobbies.shift(); // Removing a Element from front
console.log(hobbies);

hobbies[1] = 'Coding'; // Shorthand for Add or Replace
// hobbies[5] = 'Reading'; // rarely used
console.log(hobbies, hobbies[4]);

// Splice Method()--
// hobbies.splice(0, 0, 'Good Food'); // Adding a Element Within
// console.log(hobbies);

hobbies.splice(1, 0, 'Good Food'); // Adding a Element Within index[1]
console.log(hobbies);

// hobbies.splice(0, 1, 'Good Food'); // Removing a Element Within index[1]
// console.log(hobbies);

// hobbies.splice(0); // Removing whole array
// console.log(hobbies);

const removeElements = hobbies.splice(-1, 1); // Storing Removed Element
console.log(hobbies);
