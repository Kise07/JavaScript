const defaultResult = 0;
let currentResult = defaultResult;

currentResult = currentResult + 10 * 3 / 2 - 1;
// Template literal
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = "An error \\" +
                    "occured!";
                    // Backslash for escape in Double quotes
// Normal String with whitespace
outputResult(currentResult, errorMessage);