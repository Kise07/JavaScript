const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // Intialiazing Array 

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
  outputResult(currentResult, calcDescription);
}

// Shorthand Operators 
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber; // Shorthand
  createAndWriteOutput('+', initialResult, enteredNumber);
  logEntries.push(enteredNumber); // Call & Pushing 
  console.log(logEntries[0]); // Logging Pushed with Index 
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber; // Shorthand
  createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber; // Shorthand
    createAndWriteOutput('*', initialResult, enteredNumber);
  }

  function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber; // Shorthand
    createAndWriteOutput('/', initialResult, enteredNumber);
  }
  

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
