const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // Intialiazing Array

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generating and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${CalcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog( // Adding a Re-usable Function that uses Object
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    // Making & Initializing Object
    operaton: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry); // Call & Pushing
  console.log(logEntries);
}

function calculatonResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber; // Shorthand
    mathOperation = '+';
  } else {
    currentResult -= enteredNumber; // Shorthand
    mathOperation = '-';
  }
  createAndWriteOutput(mathOperation, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult); // Calling function
}

// Shorthand Operators
function add() {
  calculatonResult('ADD');
}

function subtract() {
  calculatonResult('SUBTRACT');
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber; // Shorthand
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult); // Calling function
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber; // Shorthand
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult); // Calling function
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
