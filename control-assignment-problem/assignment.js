const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// #1
if (randomNumber >= 0.7) {
  alert('greater or equal to 0.7');
} else {
  alert('Not greater!');
}

// #2
const numbers = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < numbers.length; i++) {
  // #1 Method (For-Loop)
  console.log(numbers[i]);
}

for (const num of numbers) {
  // #2 Method (For-of Loop)
  console.log(num);
}

let counter = 0; // #3 Method (While Loop)
while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter++;
}

// #3
// for loop => backwards

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
  console.log(i, 'index'); // counting indexes
}

// #4
const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);
if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert('Greater than 0.7 or smaller than 0.2');
}
