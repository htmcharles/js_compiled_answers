function countVowels(str) {
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();

    // Define an array containing the vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Initialize a variable to count the number of vowels
    let count = 0;

    // Iterate through each character of the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel (excluding 'y')
        if (vowels.includes(str[i]) && str[i] !== 'y') {
            // If it is, increment the count
            count++;
        }
    }

    // Return the total count of vowels
    return count;
}

// Test the function
console.log(countVowels('Hello World')); // Output: 3 (e, o, o)