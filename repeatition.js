function firstNotRepeatedCharacter(str) {
    // Initialize an object to store the frequency of each character
    const charFrequency = {};

    // Iterate through the string to count the frequency of each character
    for (let char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Iterate through the string again to find the first character with a frequency of 1
    for (let char of str) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    // If no character with frequency 1 is found, return null
    return null;
}

// Test the function
console.log(firstNotRepeatedCharacter('abacddbec')); // Output: 'e'