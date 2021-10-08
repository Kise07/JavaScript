const defaultResult = 0;
let currentResult = defaultResult;

// Return Implimentation in Function
function add(num1, num2) {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
