function generateCombinations(str) {
    let result = [];

    function backtrack(startIndex, currentCombination) {
        // Add the current combination to the result
        result.push(currentCombination);

        // Iterate over the remaining characters in the string
        for (let i = startIndex; i < str.length; i++) {
            // Generate combinations starting from the next character
            backtrack(i + 1, currentCombination + str[i]);
        }
    }

    // Start the backtracking process
    backtrack(0, '');

    return result;
}

// Test the function
console.log(generateCombinations('dog'));