function countOccurrences(str) {
    // Convert the string to lowercase to ignore case sensitivity
    str = str.toLowerCase();

    // Initialize an object to store the count of each letter
    const occurrences = {};

    // Iterate through each character in the string
    for (let char of str) {
        // Check if the character is a letter
        if (/[a-z]/.test(char)) {
            // If the character is already in the occurrences object, increment its count
            if (occurrences[char]) {
                occurrences[char]++;
            } else {
                // If the character is not in the occurrences object, initialize its count to 1
                occurrences[char] = 1;
            }
        }
    }

    // Convert the occurrences object to a string representation
    let result = '';
    for (let char in occurrences) {
        result += `${char}=${occurrences[char]}, `;
    }
    // Remove the trailing comma and space
    result = result.slice(0, -2);

    return result;
}

// Test the function
console.log(countOccurrences("The meeting is done")); // Output: "t=2, h=1, e=2, m=1, i=1, n=1, g=1, s=1, d=1, o=1, "