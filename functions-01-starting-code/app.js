const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}

// Method (Object + function)
// const person = {
//   greet: function greet() {
//     console.log('Hello there!');
//   },
// };

// person.greet();

console.dir(startGame); // type of fuction

// startGame(); // Direct Execution
startGameBtn.addEventListener('click', startGame); // Indirect Execution w Button
