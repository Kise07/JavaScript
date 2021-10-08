const defaultResult = 0;
let currentResult = defaultResult;

// Function Execution "Indirectly"
function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);
