// #1 Creating Array
const numbers = [1, 2, 3];
console.log(numbers);

// // const moreNumbers = new Array(5, 2);
// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

// #2 Data in Array
const hobbies = ['Cooking', 'Sports']; // Simple Array
const personalData = [30, 'Max', { moreDetails: [] }]; // Mixed Types

const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
]; // array in Array Or Multi-dimensional

for (const data of analyticsData) {
  // nested Arrays
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]); // Indexing personalData
