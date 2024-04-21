function extractUniqueCharacters(str) {
    // Create an empty object to store encountered characters
    const encountered = {};
    
    // Initialize an empty string to store unique characters
    let uniqueStr = '';
    
    // Iterate through each character in the string
    for (let char of str) {
        // If the character has not been encountered yet, add it to the unique string
        if (!encountered[char]) {
            uniqueStr += char;
            encountered[char] = true;
        }
    }
    
    return uniqueStr;
}

// Test the function
console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog")); // Output: "thequickbrownfxjmpsvlazydg"