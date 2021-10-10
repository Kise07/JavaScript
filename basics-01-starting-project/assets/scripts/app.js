const defaultResult = 0;
let currentResult = defaultResult;

// Splitting Codes into Functions
function add() {
    const enteredNumber = parseInt(usrInput.value)
    const calcDescription = `${currentResult} + ${enteredNumber.value}`;
    currentResult = currentResult + enteredNumber.value;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
