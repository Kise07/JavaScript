// let name = 'Max';
// let hobbies; // Global Variables using let

// if (name === 'Max') {
//   //   var hobbies = ['Sports', 'Cooking']; //Global variable within array
//   //   let hobbies = ['Sports', 'Cooking']; //local variable within array
//   hobbies = ['Sports', 'Cooking']; //Using Global variable within
//   console.log(hobbies);
// }

// function greet() {
//   let age = 30; // local Variable
//   let name = 'Manuel'; // shadow variable
//   console.log(name, age, hobbies);
// }

// console.log(name, hobbies);

// greet();
// 'use strict'; // Strict-mode

// let userName = 'Max';

// console.log(userName);

// Inside the JavaScript Engine - How the Code Executes
function getName() {
  return prompt('Your name: ', '');
}

function greet() {
  const userName = getName();
  console.log('Hello ' + userName);
}

greet();
