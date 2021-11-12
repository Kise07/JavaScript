// Working with Sets--
// const ids = new Set(['Hi', 'from', 'set!']); // Initialize Set w new()
// ids.add(2);
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// Working with Maps--
// const person1 = { name: 'Max' }; // Normal Objects
// const person2 = { name: 'Manuel' };

// Initialize Map w new()
// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const entry of personData.entries()) { // #1 Normal
//   console.log(entry);
// }

// #2 Using Array Destructuring--
// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// #3 Using Keys function--
// for (const key of personData.keys()) {
//   console.log(key);
// }

// #4 Using Values function--
// for (const value of personData.values()) {
//   console.log(value);
// }

// Size Properties--
// console.log(personData.size);

// Understanding WeakSet--
let person = { name: 'Max' };
const persons = new WeakSet();
persons.add(person);

// ... some operations
// person = null;

console.log(persons);

// Understanding WeakMap--
const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null; // ... some operations

console.log(personData);
