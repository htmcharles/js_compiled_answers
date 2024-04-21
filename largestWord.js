function findLongestWord(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Initialize variables to store the longest word and its length
    let longestWord = '';
    let maxLength = 0;

    // Iterate through each word
    for (let i = 0; i < words.length; i++) {
        // Update the longest word and its length if the current word is longer
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }

    // Return the longest word found
    return longestWord;
}

// Test the function
console.log(findLongestWord('Web Development Tutorial')); // Output: 'Development'