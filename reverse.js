function reverseNumber(num) {
    // Convert number to string
    let numStr = num.toString();
    
    // Reverse the string
    let reversedStr = numStr.split('').reverse().join('');
    
    // Convert back to number
    let reversedNum = parseInt(reversedStr);
    
    return reversedNum;
}

// Test the function
let x = 32243;
console.log(reverseNumber(x));