const defaultResult = 0;
let currentResult = defaultResult;

// Converting String to Integer usnig parseFloat & parseInt for specific types
function add() {
// currentResult = currentResult + +userInput.value;  (+ gives Decimal num & Integers)
// currentResult = currentResult.toString + userInput.value;  (toString convert to String -- less useage)
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
