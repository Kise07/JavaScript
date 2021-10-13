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
  if ( // LOGICAL AND OPERATOR
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE'
  ) {
    return;
  }

  // LOGICAL OR OPERATOR
  // if (
  //   calculationType === 'ADD' ||
  //   calculationType === 'SUBTRACT' ||
  //   calculationType === 'MULTIPLY' ||
  //   calculationType === 'DIVIDE'
  // ) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber; // Shorthand
    mathOperation = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber; // Shorthand
    mathOperation = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber; // Shorthand
    mathOperation = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber; // Shorthand
    mathOperation = '/';
  }
  createAndWriteOutput(mathOperation, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult); // Calling function
  // }
}

// Shorthand Operators
function add() {
  calculatonResult('ADD');
}

function subtract() {
  calculatonResult('SUBTRACT');
}

function multiply() {
  calculatonResult('MULTIPLY');
}

function divide() {
  calculatonResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
