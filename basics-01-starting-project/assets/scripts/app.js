const defaultResult = 0;
let currentResult = defaultResult;

// Splitting Codes into Functions

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber.value}`;
  currentResult = currentResult + enteredNumber.value;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
