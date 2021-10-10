const defaultResult = 0;
let currentResult = defaultResult;

// Splitting Codes into Functions 
function add() {
    const calcDescription = `${currentResult} + ${userInput.value}`;
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
