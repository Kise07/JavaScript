const startGameBtn = document.getElementById('start-game-btn');

// Function Expression---
// const start = function () {
//   // Anonymous function
//   console.log('Game is starting...');
// };

// Method (Object + function)
// const person = {
//   greet: function greet() {
//     console.log('Hello there!');
//   },
// };

// person.greet();

// console.dir(startGame); // type of fuction

// startGame(); // Direct Execution
startGameBtn.addEventListener('click', function () {
  //  Anonymous function
  console.log('Game is starting...');
}); // Indirect Execution w Button
