function countOccurrences(str, letter) {
    // Convert the string to lowercase to make the search case-insensitive
    str = str.toLowerCase();
    
    // Initialize a variable to store the count of occurrences
    let count = 0;
    
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character matches the specified letter
        if (str[i] === letter.toLowerCase()) {
            count++;
        }
    }
    
    return count;
}

// Test the function
console.log(countOccurrences('rwanda coding academy', 'a')); // Output: 4