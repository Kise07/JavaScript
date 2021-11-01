// Task-1...
const taskEle1 = document.querySelector('li');
const taskEle2 = document.getElementById('task-1');

taskEle1.style.color = 'white';
taskEle2.style.backgroundColor = 'black';

// Task-2...
const docTitle1 = document.querySelector('title');
// docTitle1.textContent = 'Assignment - Solved!';

const docHead = document.head;
const docTitle2 = document.head.querySelector('title');

docTitle2.textContent = 'Assignment - Solved!';

// Task-3...
// const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!';
