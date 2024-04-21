function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the original string is equal to the reversed string
    return cleanStr === reversedStr;
}

// Test the function
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("nursesrun")); // Output: true
console.log(isPalindrome("hello")); // Output: false