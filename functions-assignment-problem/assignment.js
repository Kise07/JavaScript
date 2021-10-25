const sayHello = (name) => console.log('Hi ' + name); // #1 an arrow function

// #2 3 types of functions
const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi Hard-coded!');
const sayHello4 = (name) => 'Hi ' + name;

sayHello('Kise');
sayHello2('Kise', 'Hello');
sayHello3();
console.log(sayHello4('Kise'));

// #3 Default argument & fallback value
const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello5('Manuel');
sayHello5('Manuel', 'Hello');

// #4 'checkInput' w no argument/string
function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);
